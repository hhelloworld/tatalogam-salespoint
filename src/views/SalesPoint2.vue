<template>
  <div style="max-width: 600px; margin: 0px auto; display: row; justify-items: center; padding: 0px 0px">
    <div style=" border-radius: 0px; background-color: #007dd6; display: flex; flex-direction: row; align-items: center; padding: 12px; padding-top: 32px; width: 100%; margin: 0 auto; height: 96px; justify-content: space-between;">
      <div style="display: flex; align-items: center;">
<!-- <v-img src="@/assets/tatalogam.png" width="55px" height="65px" cover/>-->  
      <p style="color: white; font-family: 'Urbanist', sans-serif; font-weight: 900; margin-left: 6px; font-size: 32px;">Sales Point</p>
      </div>
      <div style="display: flex; align-items: center;">
        <v-img cover src="@/assets/nolan.jpg" width="32px" height="32px" style="border: 3px white solid; margin: auto 0px; border-radius: 50%; object-fit: cover; align-self: flex-end;"/>
        <p class="name" style="color: white;  font-weight: 800; margin-left: 14px; font-size: 12px;">Andrew Oethara</p>
      </div>
      
    </div>

    <div class="flex-container-button background1" style="padding: 14px; height: auto; background-color: #007dd6; max-width: 600px; margin: 0px auto; border-bottom-right-radius: 4px; overflow: hidden;">
      <div class="flex-container-button" style="display: flex; z-index:1; overflow: hidden;">

        <div class="center-custom" style="margin: 8px 6px; z-index: 1;">
          <button class="circular-button">
            <font-awesome-icon icon="percent" size="lg" />
          </button>
          <p class="button-text-bold">Promo</p>

        </div>

        <div class="center-custom" style="margin: 8px 6px;">
          <button class="circular-button">
          <font-awesome-icon icon="box-open" size="lg"/>
          </button>
          <p class="button-text-bold">Product</p>

        </div>

        <div class="center-custom" style="margin: 8px 6px;">
          <button class="circular-button">
          <font-awesome-icon icon="coins" size="lg" />
          </button>
          <p class="button-text-bold">Points</p>

        </div>

        <div class="center-custom" style="margin: 8px 6px;">
          <button class="circular-button">
          <font-awesome-icon icon="chart-column" size="lg" />  
          </button>
          <p class="button-text-bold">Graphs</p>

        </div>

        <div class="center-custom" style="margin: 8px 6px;">
          <button class="circular-button">
          <font-awesome-icon icon="clock-rotate-left" size="lg" />
          </button>
          <p class="button-text-bold">Deals</p>

        </div>

      </div>


  </div>
  <div style="padding: 24px">
      <p  style=" max-width: 600px; margin: 0px auto; font-size: 20px; font-weight: 900;">PROMO: <span style="max-width: 600px; margin: 0px auto; font-size: 20px; font-weight: 900; color: grey"> SIMANTAP23</span></p>

    <p class="mt-1" style="max-width: 600px; margin: 0px auto; font-size: 14px; font-weight: 900;">My Items</p>

    <div class="flex-container mt-4" style="max-width: 600px; margin: 0px auto; margin-bottom: 96px">
      <div v-for="product in produk" :key="product.id" class="flex-item" @click="openDialog(product)">
        <img cover :src="product.image" :alt="product.name" class="product-image" style="width: 100%; height: 80%">
        <div class="product-info">
          <p style="font-size: 16px; font-weight: 700">{{ product.name }}</p>
          <p style="font-size: 12px; font-weight: 700">Quantity: {{ product.quantity }}</p>
          <p style="font-size: 12px; font-weight: 700">Limit: {{ product.limit }}</p>
        </div>
      <button class="button-text-bold mt-6" style="height: 30px; border-radius: 6px; width: 100%;  padding: 4px 6px; background-color: #006bb8">Edit</button>

      </div>
    </div>

    <v-dialog v-model="dialog" max-width="600">
        <v-card style="padding: 12px;">
          <v-img :src="selectedProduct.image" :alt="selectedProduct.name" class="product-image" />

            <p style="font-size: 20px; font-weight: 700">
              {{ selectedProduct.name }}
            </p>
            <div>
              <p> Quantity: {{ selectedProduct.quantity }}</p>
              <p> Limit: {{ selectedProduct.limit }}</p>

            </div>

            <div class="quantity-toggle" style="padding: 4px 6px; width: 100px;  border: 1px solid #e0e0e0;">
              <button @click="decrement()">&mdash;</button>
              <input style="width: 32px; text-align: center; " class="mx-2" type="text" :value="selectedProduct.quantity" readonly>
              <button       :disabled="selectedProduct.quantity === selectedProduct.limit" @click="increment()">&#xff0b;</button>
            </div>
          <v-card-actions>
            <button @click="closeDialog">Close</button>
          </v-card-actions>
        </v-card>
      </v-dialog>

  </div>
</div>
</template>

<script>

  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  export default {
    components: {
      FontAwesomeIcon,
    },
    data() {
      return {
        quantity: 1,
        buttonAdd: true,

        selectedProduct: {},
        dialog: false,
        produk: [
        {
          id: 1,
          name: 'Genteng A',
          image: 'https://atlas-content-cdn.pixelsquid.com/stock-images/roof-mr1Kdw9-600.jpg',
          quantity: 2,
          limit: 5,
        },
        {
          id: 2,
          name: 'Genteng B',
          image: 'https://atlas-content-cdn.pixelsquid.com/stock-images/roof-mr1Kdw9-600.jpg',
          quantity: 10,
          limit: 50,
        },
        {
          id: 3,
          name: 'Genteng C',
          image: 'https://atlas-content-cdn.pixelsquid.com/stock-images/roof-mr1Kdw9-600.jpg',
          quantity: 10,
          limit: 50,
        },
        {
          id: 4,
          name: 'Genteng D',
          image: 'https://atlas-content-cdn.pixelsquid.com/stock-images/roof-mr1Kdw9-600.jpg',
          quantity: 10,
          limit: 50,
        },
        {
          id: 5,
          name: 'Gented E',
          image: 'https://atlas-content-cdn.pixelsquid.com/stock-images/roof-mr1Kdw9-600.jpg',
          quantity: 10,
          limit: 50,
        },
        ]
      };
    },

    // computed: {
    //   isAddButtonDisabled() {
    //     return this.produk.quantity === this.produk.limit;
    //   },
    // },

    methods: {

      increment () {
        if (this.produk.quantity === this.produk.limit || this.selectedProduct.quantity === this.produk.limit ) {
          this.selectedProduct.quantity++;
        }  else {
          alert('Maximum quantity reached');
        }
      },
      decrement () {
        if(this.produk.quantity === 1 || this.selectedProduct.quantity === 1) {
          alert('Negative quantity not allowed')
        } else {
          this.selectedProduct.quantity--
        }
      },


      openDialog(product) {
        this.selectedProduct = product;
        this.dialog = true;
      },
      closeDialog() {
        this.dialog = false;
      },
    }
  };
</script>

<style type="text/css">

  @media (max-width: 768px) {
    .name {
      display: none;
    }
  }

  .center-custom {
    display: flex; flex-direction: column; align-items: center;
  }

  .flex-container-button {
    display: grid !important;
    gap: 15px; /* sets only for rows */

    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    max-width: 650px;
    justify-content: center;
  }

  .flex-item-button {
    padding: 12px;
    display: grid !important;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    max-width: 100px;
  }

  .flex-container {
    display: grid !important;
    row-gap: 15px; 

    column-gap: 10px; 
    max-height: 100% !important;

    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    max-width: 650px;
    justify-content: center;
  }

  .flex-item {
    padding: 12px;
    display: grid !important;
    align-content: space-between !important;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    min-height: auto;
    height: 100%;
    max-height: 900px;
    max-width: 200px;

  }

  .circular-button {

    width: 50px; /* Adjust the width to make it circular */
    height: 50px; /* Adjust the height to make it circular */
    border-radius: 50%;
    background-color: #f5fc0f; /* Set your desired background color */
    border: none;
    color: #006bb8; /* Set the text color */
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px; /* Adjust the icon size */
    margin-bottom: 8px;
  }

  .button-text-bold {
    font-size: 14px;
    font-weight: 700;
    color: white;
  }

  .background1 {
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, #006bb8 0.5px, transparent 0.4px),
              radial-gradient(circle, #006bb8 1px, transparent 0.9px),
              radial-gradient(circle, #006bb8 2px, transparent 1.8px);
  background-size: 36px 36px;
  background-position: 0 0, 18px 18px, 36px 36px;
}



</style>
