import { ref, computed } from 'vue'
import { supabase } from '../supabaseClient'

export function useTemplates() {
  const templates = ref<any[]>([])
  const loading = ref(false)
  const error = ref(null)

  const fetchTemplates = async () => {
    loading.value = true
    error.value = null
    try {
      const { data, error: err } = await supabase
        .from('marketing_templates')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (err) throw err
      templates.value = data || []
    } catch (err) {
      console.error('Error fetching templates:', err)
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const createTemplate = async (templateData) => {
    loading.value = true
    error.value = null
    try {
      const { data, error: err } = await supabase
        .from('marketing_templates')
        .insert([templateData])
        .select() // Add this to return the inserted data
      
      if (err) throw err
      
      // Ensure we have the complete template data
      const newTemplate = data?.[0]
      if (!newTemplate) {
        throw new Error('No data returned from insert')
      }
      
      // Update the templates array with the new template
      templates.value = [newTemplate, ...templates.value]
      
      return newTemplate
    } catch (err) {
      console.error('Error creating template:', err)
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  const getTemplateById = async (id) => {
    loading.value = true
    error.value = null
    try {
      const { data, error: err } = await supabase
        .from('marketing_templates')
        .select('*')
        .eq('id', id)
        .single()

      if (err) throw err
      return data
    } catch (err) {
      console.error('Error fetching template:', err)
      error.value = err.message
      return null
    } finally {
      loading.value = false
    }
  }

  // Computed property to filter out any null values and ensure proper typing
  const validTemplates = computed(() => templates.value.filter((template): template is NonNullable<typeof template> => template != null))

  return {
    templates: validTemplates, // Return the computed property instead
    loading,
    error,
    fetchTemplates,
    createTemplate,
    getTemplateById
  }
}