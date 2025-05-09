<template>
  <div class="mt-10">
    <ul
      role="list"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-pop-secondary/50 px-4 py-8 rounded-md"
    >
      <li
        v-for="person in people"
        :key="person.email"
        class="col-span-1 flex flex-col divide-y divide-secondary rounded-md bg-primary text-center shadow"
      >
        <div class="flex flex-1 flex-col p-8">
          <img class="mx-auto h-32 w-32 flex-shrink-0 rounded-full" :src="person.imageUrl" alt="" />
          <h3 class="mt-5 text-sm font-medium text-pop-secondary">
            {{ person.name }}
          </h3>
          <dl class="mt-1 flex flex-grow flex-col justify-between">
            <dt class="sr-only">Persona</dt>
            <dd class="text-sm text-secondary">
              {{ person.persona }}
            </dd>
            <dt class="sr-only">Role</dt>
            <dd class="mt-1">
              <span
                class="inline-flex items-center rounded-full bg-secondary/20 px-2 py-1 text-xs font-medium text-pop-secondary ring-1 ring-inset ring-pop-secondary/50"
                >{{ person.role }}</span
              >
            </dd>
          </dl>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-secondary">
            <div class="flex w-0 flex-1">
              <a
                :href="`mailto:${person.email}`"
                class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-pop-secondary"
              >
                <i class="fa-solid fa-envelope text-secondary text-xl" aria-hidden="true"></i>

                Email
              </a>
            </div>
            <div class="-ml-px flex w-0 flex-1">
              <a
                :href="`tel:${person.telephone}`"
                class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-pop-secondary"
              >
                <i class="fa-solid fa-phone text-secondary text-lg" aria-hidden="true"></i>
                Call
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const people = [
  {
    name: 'Jane Cooper',
    persona: 'Property Manager',
    role: 'Core User',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Cody Fisher',
    persona: 'Leasing Coordinator',
    role: 'Leasing User',
    email: 'cody.fisher@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Esther Howard',
    persona: 'Branch Accountant',
    role: 'Accounting User',
    email: 'esther.howard@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Cameron Williamson',
    persona: 'Super Admin',
    role: 'Team Admin',
    email: 'cameron.wil@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Kristin Watson',
    persona: 'Property Manager',
    role: 'Core User',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jenny Wilson',
    persona: 'Leasing Coordinator',
    role: 'Leasing User',
    email: 'cody.fisher@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Courtney Henry',
    persona: 'Branch Manager',
    role: 'Content Manager',
    email: 'esther.howard@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Theresa Webb',
    persona: 'Property Manager',
    role: 'Core User',
    email: 'cameron.wil@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
];
</script>
