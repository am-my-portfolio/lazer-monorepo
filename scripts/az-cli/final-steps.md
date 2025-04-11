# Install Azure CLI

```
> brew update && brew install azure-cli
```

- login to Azure cli
  `az login`

- Set some variable names first ...

```
> kv_name=lazer-kv \
    rg_name=lazer-rg \
    cert_name=lazer-cert \
    vm_name=lazer-vm \
    acr_name=lazeracr \
    ssh_key_name=lazer-azure-afshan
```

# Create resources

## Resource Group

- Looks like there is already a resource group named `LAZER.io`, so I will use it
  - but if needed to create ....
  - https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-cli

```
> az group create --name $rg_name --location eastus
```

## Key Vault

- create key vault

```
> az keyvault create \
    --resource-group $rg_name \
    --name $kv_name \
    --enabled-for-deployment
```

- assign role / access to my user to this key vault
  - go to Key Vault and select `Access control (IAM)`
  - click the `Add role assignment` button from the `Grand access to this resource` card
  - select `Key Vault Administrator`

## SSL Cert (not the same as SSH keys)

- Secure the Web Server (Nestjs API) with SSL and Add Nginx for reverse proxy/load balancing
- https://learn.microsoft.com/en-us/azure/virtual-machines/linux/tutorial-secure-web-server#generate-a-certificate-and-store-in-key-vault
- https://medium.com/@midejoseph24/tls-ssl-certificates-to-secure-web-server-on-azure-vm-f1901bfb8e3b

- Using Certbot: https://www.programonaut.com/setup-ssl-with-docker-nginx-and-lets-encrypt/
  - https://www.youtube.com/watch?v=J9jKKeV1XVE

```
az keyvault certificate create \
    --vault-name $kv_name \
    --name $cert_name \
    --policy "$(az keyvault certificate get-default-policy)"
```

- generate secrets from the certificate in the vault

```
> secret=$(az keyvault secret list-versions --vault-name $kv_name --name $cert_name --query "[?attributes.enabled].id" --output tsv)

> vm_secret=$(az vm secret format --secrets "$secret" -g $rg_name --keyvault $kv_name)
```

- Update an existing vm
  `az vm update -n $vm_name -g $rg_name --set osProfile.secrets="$vm_secret"`

az vm update -n $vm_name -g $rg_name --set osProfile.customData= <<<<< NOT POSSIBLE

## Create linux VM

- Option 1: using the Azure cli

```
az vm create \
    --resource-group $rg_name \
    --name $vm_name \
    --image Ubuntu2204 \
    --admin-username azureuser \
    --generate-ssh-keys \
    --secrets "$vm_secret" \
    --custom-data ./nginx/cloud-init-web-server.txt     <<<<< This doesnt work as of now

```

- open port

```
az vm open-port --resource-group $rg_name --name $vm_name --port 443
```

- add secrets to the VM (not sure if this works)

```
az vm secret add --certificate $cert_name --keyvault $kv_name --name $vm_name --resource-group $rg_name
```

    - Option 2: Using the Portal
        - https://learn.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-portal?tabs=ubuntu
    - set username and password for it

- set memory https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/overview?
  tabs=breakdownseries%2Cgeneralsizelist%2Ccomputesizelist%2Cmemorysizelist%2Cstoragesizelist%2Cgpusizelist%2Cfpgasizelist%2Chpcsizelist

## Create SSH keys to connect to the VM

- https://learn.microsoft.com/en-us/azure/virtual-machines/ssh-keys-azure-cli
- https://learn.microsoft.com/en-us/azure/virtual-machines/linux/mac-create-ssh-keys
- https://learn.microsoft.com/en-us/azure/virtual-machines/linux/ssh-from-windows

```
az sshkey create --name $ssh_key_name --resource-group $rg_name
```

### connect to the VM using SSH

- https://learn.microsoft.com/en-us/azure/virtual-machines/linux-vm-connect?tabs=Linux
- a public key was downloaded when the VM was created
- do these things: https://learn.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-portal?tabs=ubuntu#connect-to-virtual-machine

- if the VM is already created, but you generated new ssh keys (new computer, e.g), then update the VM to use the new key

  - in Azure Portal, select the VM, then in the 'Help/Reset Password', select `Add SSH public key` and `Use existing key stored in Azure` option

- then from local terminal window, cd to the folder where the ssh pem key is (.ssh folder)

```
ssh azureuser@172.174.36.205 [-i $ssh_key_name.pem]
```

- or from anywhere else

```
ssh -i ~/.ssh/$ssh_key_name.pem azureuser@<<IP_ADDRESS>>
```

## Container Registry

```
> az acr create -g $rg_name --name $acr_name --sku Basic
```

    - login to container registry (WHY ?)
    ```
    > az acr login -n $acr_name --expose-token
    ```

- In the Azure Portal: select the Container Registry > Settings > Access Keys > Check `Admin User` and then set username and password

## Azure Repos

- push your code to azure repo

- Login (ssh) to your VM, and generate SSH keys
  - https://learn.microsoft.com/en-us/azure/devops/repos/git/use-ssh-keys-to-authenticate?view=azure-devops&tabs=current-page
- cd to the .ssh folder
- Copy the ssh using command `cat id_rsa.pub`
- Create new Key in the https://dev.azure.com/lazer-tec/_usersSettings/keys

- clone github repo https://dev.azure.com/lazer-tec/_git/lazer-monorepo
  `git clone git@ssh.dev.azure.com:v3/lazer-tec/lazer-monorepo/lazer-monorepo`

- in the vm, create an external network
  `sudo docker network create lazer-net`

- cd to the folder, then run
  `sudo docker compose --profile ollama-cpu up -d`

- or https://stackoverflow.com/questions/48957195/how-to-fix-docker-got-permission-denied-issue

## Install docker in the VM

- https://docs.docker.com/engine/install/ubuntu/
- https://medium.com/hardwareandro/install-docker-on-azure-virtual-machine-github-docker-hub-azure-deploy-pipeline-part-1-4b1e73dd0d7

- After SSHing to the VM, in the root of the lazer-monorepo, run

```
. ./scripts/docker/install.sh
```

- then use
  `docker version`

- list all images
  `sudo docker images`

- list of containers
  `sudo docker ps`

- prune
  `docker system prune -a --volumes`

- https://dev.to/yuvraajsj18/how-to-fix-docker-no-space-left-on-device-error-co7

- start docker
  `sudo dockerd`
  `sudo systemctl start docker`

- check files in docker image (not container) - https://betterstack.com/community/questions/how-to-view-contents-of-docker-images/
  `sudo docker run --rm -it --entrypoint=/bin/bash lazer-monorepo-nginx`

# Copy SSL Cert to the VM

- https://medium.com/@midejoseph24/tls-ssl-certificates-to-secure-web-server-on-azure-vm-f1901bfb8e3b

- the ssl cert files are in the folder `nginx/ssl`
- `scp lazer-kv-lazer-cert-20250102.key lazer-kv-lazer-cert-20250102.pem azureuser@172.174.36.205:~`
