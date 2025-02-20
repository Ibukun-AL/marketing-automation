<template>
  <q-layout view="hHh LpR fFf">
    <!-- Desktop Sidebar -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="900"
      class="sidebar bg-dark"
      :class="{ 'bg-dark': $q.dark.isActive }"
    >
      <div class="q-pa-md sidebar-content">
        <div class="logo-section q-mb-xl">
          <div class="row items-center">
            <img src="../assets//Logo (1).png" alt="Logo" class="logo-icon" />
            
          </div>
        </div>
        
        <q-list class="nav-list">
          <q-item clickable v-ripple to="/" exact class="nav-item q-py-md">
            <q-item-section avatar>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="nav-icon">
                <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" fill="currentColor"/>
              </svg>
            </q-item-section>
            <q-item-section>Home</q-item-section>
            
          </q-item>

          <q-item clickable v-ripple to="/templates" class="nav-item q-py-md">
  <q-item-section avatar>
    <q-icon name="description" />
  </q-item-section>
  <q-item-section>Templates</q-item-section>
</q-item>

          <q-item clickable v-ripple to="/campaigns" class="nav-item q-py-md">
            <q-item-section avatar>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="nav-icon">
                <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 12H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 17H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </q-item-section>
            <q-item-section>Campaigns</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/flows" class="nav-item q-py-md active">
            <q-item-section avatar>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="nav-icon">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </q-item-section>
            <q-item-section>Flows</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/audience" class="nav-item q-py-md">
            <q-item-section avatar>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="nav-icon">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </q-item-section>
            <q-item-section>Audience</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/content" class="nav-item q-py-md">
            <q-item-section avatar>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="nav-icon">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 13H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 17H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 9H9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </q-item-section>
            <q-item-section>Content</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/conversations" class="nav-item q-py-md">
            <q-item-section avatar>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="nav-icon">
                <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1076 15.3062C19.5201 16.4904 18.6665 17.5298 17.6147 18.3494C16.5629 19.1689 15.3387 19.7482 14.0337 20.0387C12.7288 20.3291 11.3769 20.3225 10.0745 20.0192C8.77207 19.716 7.55391 19.1249 6.51045 18.2949C5.46699 17.4648 4.62339 16.4165 4.04841 15.2259C3.47344 14.0353 3.17877 12.7297 3.19621 11.4095C3.21366 10.0893 3.54291 8.79225 4.15735 7.617C4.77178 6.44174 5.65125 5.41786 6.72375 4.61732C7.79626 3.81678 9.03276 3.25935 10.3455 2.98821C11.6582 2.71707 13.0124 2.73958 14.3161 3.05384C15.6198 3.3681 16.8384 3.96741 17.8882 4.81454C18.938 5.66167 19.7959 6.73603 20.399 7.95467C21.002 9.17331 21.3368 10.5065 21.38 11.87L21 11.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </q-item-section>
            <q-item-section>Conversations</q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>

    <!-- Main Content -->
    <q-page-container>
      <q-page class="q-pa-md" :class="{ 'bg-dark': $q.dark.isActive }">
        <!-- Updated Header -->
        <div class="header-container q-mb-lg">
          <!-- Mobile Menu Button -->
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            class="lt-md"
            @click="leftDrawerOpen = !leftDrawerOpen"
          />

          <!-- Updated Search Bar -->
          <div class="search-container">
            <q-input
              v-model="search"
              placeholder="Search here..."
              class="search-input"
              :class="{ 'bg-dark': $q.dark.isActive }"
              borderless
              dense
            >
              <template v-slot:prepend>
                <q-icon name="search" size="20px" class="search-icon" />
              </template>
            </q-input>
          </div>

          <!-- Right Section -->
          <div class="right-section">
            <ThemeToggle />
            <q-btn round flat class="notification-btn">
              <q-icon name="notifications_none" size="24px" class="notification-icon" />
              <q-badge color="red" floating rounded>2</q-badge>
            </q-btn>
            <div class="user-profile">
              <q-avatar size="40px">
                <img src="../assets/Prof.png" alt="Profile" />
              </q-avatar>
              <div class="user-info">
                <div class="user-name">Hussain Ahmed</div>
                <div class="user-role">Admin</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Page Title & Create Button -->
        <div class="row items-center justify-between q-mb-md">
          <h4 class="text-h4 q-my-none" :class="{ 'text-white': $q.dark.isActive }">Flows</h4>
          <q-btn
            class="custom-green-btn"
            label="Create Flow"
            
            @click="onCreateFlow"
          />
        </div>

        <!-- Subtitle -->
        <div class="q-mb-lg">
          <h5 class="text-h5 q-mb-sm" :class="{ 'text-white': $q.dark.isActive }">Maximize Revenue with Flows</h5>
          <p class="text-grey-7">
            Drive up revenue and engagement with key automations that are pre-built and ready to turn on!
          </p>
        </div>

         <!-- Flow Cards Grid -->
    <div v-if="loading" class="text-center q-pa-md">
      <q-spinner color="primary" size="3em" />
    </div>
    <div v-else-if="error" class="text-center text-negative q-pa-md">
      {{ error }}
    </div>
    <div v-else-if="flows.length === 0" class="text-center q-pa-md">
      No flows found. Create your first flow!
    </div>
    <div v-else class="flow-cards-grid">
      <q-card v-for="flow in flows" :key="flow.id" class="flow-card" :class="{ 'bg-dark': $q.dark.isActive }">
        <q-card-section v-if="flow" class="flow-card-content">
          <div class="text-h6" :class="{ 'text-white': $q.dark.isActive }">{{ flow.name }}</div>
          <p class="description-text" :class="{ 'text-grey-5': $q.dark.isActive, 'text-grey-7': !$q.dark.isActive }">
            {{ flow.description }}
          </p>
          <div class="stats-row">
            <div class="stats-item">
              <q-icon name="info" size="20px" :class="{ 'text-grey-5': $q.dark.isActive, 'text-grey-7': !$q.dark.isActive }" />
              <span class="stats-text" :class="{ 'text-grey-5': $q.dark.isActive, 'text-grey-7': !$q.dark.isActive }">{{ flow.status }}</span>
            </div>
          </div>
          <q-btn 
          flat 
          class="get-started-btn" 
          label="View Details" 
          @click="viewFlowDetails(flow.id)"
        />
        </q-card-section>
      </q-card>
    </div>
      </q-page>
    </q-page-container>
    <CreateFlowDialog 
    :is-open="showCreateDialog"
    @update:is-open="showCreateDialog = $event"
    @flow-created="onFlowCreated"
  />
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import ThemeToggle from './ThemeToggle.vue'
import CreateFlowDialog from './CreateFlowDialog.vue'
import { useFlows } from '../controllers/create'
import { useRouter } from 'vue-router'

const leftDrawerOpen = ref(false)
const $q = useQuasar()
const search = ref('')
const showCreateDialog = ref(false)
const router = useRouter()

const { flows, loading, error, fetchFlows, createFlow } = useFlows()
onMounted(() => {
  fetchFlows()
})

// Mock data for flows
// const flows = ref([
//   {
//     id: 1,
//     title: 'Welcome Series',
//     description: 'Welcome subscribers with this 3-email series that provides a warm introduction to your business.',
//     stats: 'This flow creates a combined $30M/month for Klaviyo users.',
//     image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flow1-2QtdtR6LDhBxFH0pFjXzQPtG70OC6t.png'
//   },
//   {
//     id: 2,
//     title: 'Abandoned Cart',
//     description: 'Every 7 of 10 carts are abandoned! Recover more of them and drive up sales with this series, ever.',
//     stats: 'Conversion rates for this flow are 3x those of other flows.',
//     image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flow1-2QtdtR6LDhBxFH0pFjXzQPtG70OC6t.png'
//   },
//   {
//     id: 3,
//     title: 'Browse Abandonment',
//     description: 'Did you see something you liked? Convert curiosity into cash with this money-making series.',
//     stats: 'These emails have the highest open rates of any flow.',
//     image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flow1-2QtdtR6LDhBxFH0pFjXzQPtG70OC6t.png'
//   },
//   {
//     id: 4,
//     title: 'Customer Thank You',
//     description: 'Build loyalty with this best-practice flow. You can even tailor content for new vs. returning customers!',
//     stats: 'Post-purchase emails see over 60% open rates on average.',
//     image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flow1-2QtdtR6LDhBxFH0pFjXzQPtG70OC6t.png'
//   },
//   {
//     id: 5,
//     title: 'Customer Winback',
//     description: 'Encourage lapsed customers to come back and see what\'s new with this standard winback series.',
//     stats: 'Winback emails grow retention and profits by 25-35%.',
//     image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flow1-2QtdtR6LDhBxFH0pFjXzQPtG70OC6t.png'
//   }
// ])

const onCreateFlow = () => {
  
  showCreateDialog.value = true
}
const onFlowCreated = async (flowData) => {
  try {
    await createFlow(flowData)
    showCreateDialog.value = false
    $q.notify({
      color: 'positive',
      message: 'Flow created successfully'
    })
  } catch (err) {
    console.error('Error creating flow:', err)
    $q.notify({
      color: 'negative',
      message: 'Error creating flow: ' + err.message
    })
  }
}

const viewFlowDetails = (id) => {
  router.push({
    path: `/flow/${id}`,
  }).catch(err => {
    console.error('Navigation error:', err)
    $q.notify({
      color: 'negative',
      message: 'Error navigating to flow details'
    })
  })
}


</script>

<style scoped>
.sidebar {
  background: #1D1D1D !important;
  border: none !important;
}

.logo-section {
  padding: 12px 0;
}

.logo-icon {
  width: 252px;
  height: 52px;
}

.nav-list {
  padding: 0;
}

.nav-item {
  border-radius: 8px;
  color: #A1A1AA;
  font-weight: 500;
  margin-bottom: 8px;
  min-height: 48px;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-item.active {
  background: #09C269;
  color: white;
}

.nav-icon {
  width: 24px;
  height: 24px;
}

/* Updated Header Styles */
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #E5E7EB;
  margin: -16px -16px 24px -16px;
  padding: 16px;
  background: white;
}

.search-container {
  flex: 1;
  max-width: 400px;
  margin-right: 24px;
}

.search-input {
  background: #F4F4F5;
  border-radius: 8px;
}

.search-input :deep(.q-field__control) {
  height: 44px;
  padding: 0 12px;
}

.search-icon {
  color: #71717A;
}

.right-section {
  display: flex;
  align-items: center;
  gap: 24px;
}

.notification-btn {
  margin: 0;
  padding: 8px;
}

.notification-icon {
  color: #18181B;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.user-info {
  text-align: left;
}

.user-name {
  color: #18181B;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}

.user-role {
  color: #71717A;
  font-size: 14px;
  line-height: 20px;
}

.flow-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 0 16px;
}

.flow-card {
  border-radius: 12px;
  transition: transform 0.2s;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  background: white;
}

.flow-card:hover {
  transform: translateY(-4px);
}

.card-image-container {
  position: relative;
}

.flow-card-image {
  background: linear-gradient(45deg, #FF6B6B, #FF8E53);
  border-radius: 12px 12px 0 0;
}

.logo-circle-overlay {
  position: absolute;
  bottom: -24px;
  left: 24px;
  background: white;
  border-radius: 50%;
  padding: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.flow-card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 32px 24px 24px;
}

.text-h6 {
  font-size: 24px;
  font-weight: 600;
  color: #1A1A1A;
  line-height: 1.2;
}

.description-text {
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  margin: 0;
}

.stats-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 16px;
  border-top: 1px solid #EAEAEA;
}

.stats-icon {
  color: #09C269;
  font-size: 20px;
}

.stats-text {
  font-size: 14px;
  color: #1A1A1A;
  font-weight: 400;
}

.get-started-btn {
  background-color: #E5F7EE !important;
  color: #09C269 !important;
  font-weight: 500 !important;
  padding: 8px 16px;
  width: fit-content;
  border-radius: 6px;
}

.get-started-btn:hover {
  background-color: #d4f2e5 !important;
}

.custom-green-btn {
  background-color: #09C269 !important;
  color: white !important;
  padding: 16px 16px;
  border-radius: 6px;
}

.custom-green-btn:hover {
  background-color: #08a85a !important;
}

/* Layout for 3-2 grid */
@media (min-width: 1024px) {
  .flow-cards-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 24px;
  }
  
  .flow-card {
    grid-column: span 2;
  }
  
  .flow-card:nth-child(4),
  .flow-card:nth-child(5) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
}

@media (max-width: 1023px) and (min-width: 600px) {
  .flow-cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 599px) {
  .flow-cards-grid {
    grid-template-columns: 1fr;
    padding: 0 8px;
  }
  
  .flow-card-content {
    padding: 24px 16px 16px;
  }
  
  .text-h4 {
    font-size: 1.5rem;
  }
  
  .text-h5 {
    font-size: 1.25rem;
  }
}

/* Mobile-specific styles */
@media (max-width: 599px) {
  .header-container {
    padding: 8px 16px;
    gap: 12px;
    margin: -16px -16px 16px -16px;
  }

  .search-container {
    display: none;
  }

  .right-section {
    gap: 16px;
  }

  .user-info {
    display: none;
  }

  .flow-cards-grid {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 0;
  }

  .flow-card {
    margin: 0;
    border-radius: 8px;
  }

  .flow-card-image {
    border-radius: 8px 8px 0 0;
    height: 80px !important;
  }

  .logo-circle-overlay {
    bottom: -20px;
    left: 16px;
  }

  .logo-circle-overlay .q-avatar {
    width: 40px;
    height: 40px;
  }

  .flow-card-content {
    padding: 24px 16px 16px;
  }

  .text-h6 {
    font-size: 18px;
    margin-bottom: 4px;
  }

  .description-text {
    font-size: 14px;
    line-height: 1.4;
  }

  .stats-row {
    padding-top: 12px;
    margin-bottom: 12px;
  }

  .stats-text {
    font-size: 13px;
  }

  .get-started-btn {
    padding: 6px 12px;
    font-size: 14px;
  }

  .custom-green-btn {
    padding: 8px 16px;
    font-size: 14px;
  }

  /* Title section adjustments */
  .text-h4 {
    font-size: 24px;
  }

  .text-h5 {
    font-size: 18px;
    margin-bottom: 4px;
  }

  .text-grey-7 {
    font-size: 14px;
    line-height: 1.4;
  }

  /* Spacing adjustments */
  .q-mb-lg {
    margin-bottom: 16px;
  }

  .q-mb-md {
    margin-bottom: 12px;
  }
}
</style>