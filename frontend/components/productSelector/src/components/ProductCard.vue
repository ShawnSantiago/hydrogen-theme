<template>

  <div class="relative">
    <div class="grid snap-start gap-6 ">
      <div class="aspect-[4/5] overflow-hidden rounded bg-primary/5">
      
          <img
        
            src="{{ card_product.featured_media | image_url: width: 533 }}"
            sizes="320px"
          
            class="aspect-[inherit] h-full w-full object-cover object-center"
         
          >
         
      </div>
      <div class="grid gap-1">
        <h3
          class="text-copy"
        >
          <a
            href="{{ card_product.url }}"
            id="CardLink-{{ section_id }}-{{ card_product.id }}"
            class="after:absolute after:inset-0 after:z-10 after:content-['']"
          >
          </a>
        </h3>

        <!-- {%- render 'price', product: card_product -%} -->
      </div>
    </div>
  </div>

</template>

<script >
export default {
  data() {
    return {
      loading: false,
      post: null,
      error: null,
    }
  },
  created() {
 
        this.fetchData()
      
    
  },
  methods: {
    async fetchData() {
      this.error = this.post = null
      this.loading = true
      console.log('fetching data')
      return window.productData
      
    },
  },
}
</script>