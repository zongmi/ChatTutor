<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faAdd } from '@fortawesome/free-solid-svg-icons'

const collapsed = ref(false)

type Chat = {
  title: string
  id: string
  date: string
}

const chats = ref<Chat[]>([])

void (async () => {
  const c = await $fetch<{ id: string, title: string, createdAt: string, updatedAt: string, status: Status }[]>('/api/chat/history')
  chats.value = c.map((chat) => ({
    id: chat.id,
    title: chat.title,
    date: chat.createdAt,
  }))
})()
</script>

<template>
  <div class="min-h-screen w-full bg-gray-50 flex flex-row">
    <div class="h-screen bg-gray-200 max-h-screen flex flex-col p-5 shadow-lg" :class="{ 'w-80': collapsed }">
      <ButtonContainer @click="collapsed = !collapsed" class="size-10 justify-center items-center flex">
        <FontAwesomeIcon :icon="faBars" />
      </ButtonContainer>
      <div class="flex h-full flex-col py-5 gap-10">
        <ButtonContainer class="flex flex-row w-full items-center justify-center gap-5 cursor-pointer select-none"
          @click="navigateTo('/')">
          <FontAwesomeIcon :icon="faAdd" />
          <span v-show="collapsed">New Chat</span>
        </ButtonContainer>
        <div v-show="collapsed" class="flex flex-col gap-5 text-gray-600 overflow-y-auto">
          <h2 class="text-sm font-bold select-none">
            Recent
          </h2>
          <ButtonContainer v-for="chat in chats" :key="chat.id" class="text-sm w-full cursor-pointer select-none p-2" @click="navigateTo(`/chat/${chat.id}`)">
            <div class="flex flex-row items-center gap-5">
              <div class="flex flex-col">
                <h3>{{ chat.title }}</h3>
                <p>{{ chat.date }}</p>
              </div>
            </div>
          </ButtonContainer>
        </div>
      </div>
    </div>
    <div class="flex size-full">
      <slot />
    </div>
  </div>
</template>
