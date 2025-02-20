<template>
    <q-dialog 
      :model-value="isOpen" 
      @update:model-value="$emit('update:isOpen', $event)"
      persistent 
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
      class="create-template-dialog"
    >
      <q-layout view="hHh LpR fFf" container :class="{ 'bg-dark': $q.dark.isActive }">
        <q-header elevated class="bg-white text-dark" :class="{ 'bg-dark text-white': $q.dark.isActive }">
          <q-toolbar>
            <q-toolbar-title>{{ templateName || 'Untitled Template' }}</q-toolbar-title>
            <q-btn flat round dense icon="close" v-close-popup />
          </q-toolbar>
        </q-header>
  
        <q-page-container>
          <q-page class="row">
            <!-- Left Section -->
            <div class="col-12 col-md-4 q-pa-md bg-white" :class="{ 'bg-dark': $q.dark.isActive }">
              <div class="q-mb-lg">
                <div class="text-h6 q-mb-sm">Description</div>
                <q-input
                  v-model="templateDescription"
                  type="textarea"
                  rows="4"
                  outlined
                  dense
                  placeholder="Enter template description"
                />
              </div>
  
              <div class="q-mb-lg">
                <div class="text-h6 q-mb-sm">Name</div>
                <q-input
                  v-model="templateName"
                  outlined
                  dense
                  placeholder="Enter template name"
                />
              </div>
  
              <div class="q-mb-lg">
                <div class="text-h6 q-mb-sm">Tags</div>
                <q-select
                  v-model="templateTags"
                  outlined
                  dense
                  multiple
                  use-chips
                  :options="tagOptions"
                  placeholder="Select tags"
                />
              </div>
  
              <!-- Create Button -->
              <div class="q-mt-lg">
                <q-btn
                  label="Create Template"
                  color="primary"
                  @click="createTemplate"
                  :disable="!templateName"
                />
              </div>
            </div>
  
            <!-- Right Section - Flow Builder -->
            <div class="col-12 col-md-8 q-pa-md bg-grey-1" :class="{ 'bg-dark': $q.dark.isActive }">
              <div class="flow-builder">
                <!-- Trigger Node -->
                <div class="flow-node trigger-node q-mb-lg">
                  <div class="node-header">
                    <q-icon name="settings" class="text-primary q-mr-sm" size="sm" />
                    <span>Trigger</span>
                  </div>
                  <div class="node-content">
                    <div class="text-grey">When someone</div>
                    <div class="text-weight-medium">Checkout Started</div>
                    <div class="node-filters q-mt-sm">
                      <q-chip dense size="sm" class="bg-grey-3">
                        Flow Filters (1)
                      </q-chip>
                    </div>
                  </div>
                </div>
  
                <!-- Connector -->
                <div class="flow-connector q-mb-md">
                  <q-icon name="arrow_downward" color="grey" />
                </div>
  
                <!-- Wait Node -->
                <div class="flow-node wait-node q-mb-lg">
                  <div class="node-content">
                    <q-icon name="schedule" class="text-grey q-mr-sm" size="sm" />
                    <span>Wait 4 hours</span>
                    <q-btn flat round dense icon="more_horiz" class="text-grey float-right" />
                  </div>
                </div>
  
                <!-- Connector -->
                <div class="flow-connector q-mb-md">
                  <q-icon name="arrow_downward" color="grey" />
                </div>
  
                <!-- Email Node -->
                <div class="flow-node email-node q-mb-lg">
                  <div class="node-header">
                    <q-icon name="settings" class="text-primary q-mr-sm" size="sm" />
                    <span>Abandoned Cart: Email 1</span>
                  </div>
                  <div class="node-content">
                    <div class="text-grey">It looks like you left something behind...</div>
                    <div class="node-filters q-mt-sm">
                      <q-chip dense size="sm" class="bg-grey-3">
                        Flow Filters (1)
                      </q-chip>
                    </div>
                  </div>
                </div>
  
                <!-- Connector -->
                <div class="flow-connector q-mb-md">
                  <q-icon name="arrow_downward" color="grey" />
                </div>
  
                <!-- Wait Node -->
                <div class="flow-node wait-node q-mb-lg">
                  <div class="node-content">
                    <q-icon name="schedule" class="text-grey q-mr-sm" size="sm" />
                    <span>Wait 20 hours</span>
                    <q-btn flat round dense icon="more_horiz" class="text-grey float-right" />
                  </div>
                </div>
              </div>
            </div>
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useQuasar } from 'quasar'
  
  const $q = useQuasar()
  
  const props = defineProps({
    isOpen: {
      type: Boolean,
      required: true
    }
  })
  
  const emit = defineEmits(['update:isOpen', 'template-created'])
  
  const templateName = ref('')
  const templateDescription = ref('')
  const templateTags = ref([])
  const tagOptions = ['Standard', 'New vs. Returning', 'Customer v. Non-Customer', 'Order Count Split']
  
  const createTemplate = () => {
    if (!templateName.value) {
      $q.notify({
        color: 'negative',
        message: 'Please enter a template name'
      })
      return
    }
  
    const newTemplate = {
      title: templateName.value,
      description: templateDescription.value,
      tags: templateTags.value.join(', '), 
      created_at: new Date().toISOString()
    }
    emit('template-created', newTemplate)
    resetForm()
    emit('update:isOpen', false) // Close the dialog after creating the template
  }
  
  const resetForm = () => {
    templateName.value = ''
    templateDescription.value = ''
    templateTags.value = []
  }
  </script>
  
  <style scoped>
  .flow-builder {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .flow-node {
    background: white;
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 16px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  .node-header {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }
  
  .node-content {
    position: relative;
  }
  
  .node-filters {
    margin-top: 8px;
  }
  
  .flow-connector {
    display: flex;
    justify-content: center;
    padding: 8px 0;
  }
  
  .trigger-node {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  .wait-node {
    background: white;
    padding: 12px;
  }
  
  .email-node {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  /* Dark mode styles */
  .body--dark {
    .flow-node {
      background: #1e1e1e;
      border-color: rgba(255, 255, 255, 0.1);
    }
  
    .wait-node {
      background: #1e1e1e;
    }
  
    .node-filters .q-chip {
      background: rgba(255, 255, 255, 0.1);
    }
  }
  
  /* Responsive adjustments */
  @media (max-width: 1023px) {
    .flow-builder {
      padding: 10px;
    }
  }
  </style>