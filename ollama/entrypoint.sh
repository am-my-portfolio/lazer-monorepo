#!/bin/bash

echo "Starting Ollama server..."
ollama serve &

echo "Waiting for Ollama server to be active..."
while [ "$(ollama list | grep 'NAME')" == "" ]; do
  sleep 1
done

ollama pull llama3.1
ollama pull mxbai-embed-large

ollama run llama3.1
ollama run mxbai-embed-large

# ollama pull llama3.2-vision
