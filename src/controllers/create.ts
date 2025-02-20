// useFlows.ts
import { ref, computed } from 'vue'
import { supabase } from '../supabaseClient'

export function useFlows() {
  const flows = ref<any[]>([])
  const loading = ref(false)
  const error = ref(null)

  const fetchFlows = async () => {
    loading.value = true
    error.value = null
    try {
      const { data, error: err } = await supabase
        .from('marketing_flows')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (err) throw err
      flows.value = data || []
    } catch (err) {
      console.error('Error fetching flows:', err)
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const createFlow = async (flowData) => {
    loading.value = true
    error.value = null
    try {
      const { data, error: err } = await supabase
        .from('marketing_flows')
        .insert([flowData])
        .select() // Add this to return the inserted data
      
      if (err) throw err
      
      // Ensure we have the complete flow data
      const newFlow = data?.[0]
      if (!newFlow) {
        throw new Error('No data returned from insert')
      }
      
      // Update the flows array with the new flow
      flows.value = [newFlow, ...flows.value]
      
      return newFlow
    } catch (err) {
      console.error('Error creating flow:', err)
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  const getFlowById = async (id) => {
    loading.value = true
    error.value = null
    try {
      const { data, error: err } = await supabase
        .from('marketing_flows')
        .select('*')
        .eq('id', id)
        .single()

      if (err) throw err
      return data
    } catch (err) {
      console.error('Error fetching flow:', err)
      error.value = err.message
      return null
    } finally {
      loading.value = false
    }
  }

  // Computed property to filter out any null values and ensure proper typing
  const validFlows = computed(() => flows.value.filter((flow): flow is NonNullable<typeof flow> => flow != null))

  return {
    flows: validFlows, // Return the computed property instead
    loading,
    error,
    fetchFlows,
    createFlow,
    getFlowById 
  }
}