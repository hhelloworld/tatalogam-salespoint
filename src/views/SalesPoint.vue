<template>
  <div class="disable-dbl-tap-zoom" style="max-width: 100%; display: row; justify-items: center; padding: 0px 0px;">
    <div style="border-radius: 0px; background-color: #007dd6; display: flex; flex-direction: row; align-items: center; padding: 14px; padding-top: 32px; max-width: 600px; margin: 0 auto; height: 96px; justify-content: space-between;">
      <div style="display: flex; align-items: center;">
        <!-- <v-img src="@/assets/tatalogam.png" width="55px" height="65px" cover/>-->
        <p style="color: white; font-family: 'M PLUS Rounded 1c', sans-serif; font-weight: 800; font-size: 26px;">Sales Point</p>
      </div>
      <div style="display: flex; align-items: center;">

        <div class="mr-3 d-flex py-2 pa-2 custom-location" style="background: white; border-radius:6px">
          <font-awesome-icon size="sm" icon="location-dot" color="#FC0F5E"/>
          <p style="font-family: 'M PLUS Rounded 1c', sans-serif; font-weight: 800; color: black; font-weight: 800; margin-left: 6px; font-size: 10px;">Gambir, Jakarta</p>
        </div>
        <v-img cover src="@/assets/nolan.jpg" width="42px" height="42px" style="border: 4px white solid; margin: auto 0px; border-radius: 50%; object-fit: cover; align-self: flex-end;" />
        

        <div>
          <p class="name" style="font-family: 'M PLUS Rounded 1c', sans-serif; font-weight: 800; color: white; font-weight: 800; margin-left: 14px; font-size: 14px;">Andrew Oethara</p>
          <p class="name" style="font-family: 'M PLUS Rounded 1c', sans-serif; font-weight: 800; color: white; font-weight: 800; margin-left: 14px; font-size: 10px;">Gambir, Jakarta</p>

        </div>
      </div>
    </div>

    <div class="flex-container-button background1" style="padding: 14px; height: auto; background-color: #007dd6; max-width: 600px; margin: 0px auto; border-bottom-right-radius: 18px; border-bottom-left-radius: 18px; overflow: hidden;">
      <div class="flex-container-button" style="display: flex; z-index: 1; overflow: hidden;">
        <div class="center-custom" style="margin: 8px 6px; z-index: 1;">
          <button @click="promoDialog" class="circular-button">
            <font-awesome-icon icon="percent" size="xs2" />
          </button>
          <p class="button-text-bold">Promo</p>
        </div>

        <div class="center-custom" style="margin: 8px 6px;">
          <button class="circular-button">
            <font-awesome-icon icon="coins" size="xs2" />
          </button>
          <p class="button-text-bold">Points</p>
        </div>

        <div class="center-custom" style="margin: 8px 6px;">
          <button class="circular-button">
            <font-awesome-icon icon="chart-column" size="xs2" />
          </button>
          <p class="button-text-bold">Grafik</p>
        </div>

        <div class="center-custom" style="margin: 8px 6px;">
          <button class="circular-button">
            <font-awesome-icon icon="clock-rotate-left" size="xs2" />
          </button>
          <p class="button-text-bold">Transaksi</p>
        </div>
      </div>
    </div>
    <div style="padding: 18px;">


      <!-- <div style="display: flex; align-items: center; justify-content: space-between; border: 1px solid #ddd; padding: 8px 12px; border-radius: 12px;">
        <div>
          <font-awesome-icon icon="tags" color="#FC0F5E" size="lg" />
          <span v-if="selectedPromo" style="max-width: 600px; margin-left: 8px; font-size: 14px; font-weight: 800; color: black;"> {{selectedPromo}}</span>

          <span v-else style="max-width: 600px; margin-left: 8px; font-size: 14px; font-weight: 800; color: black;">Select Promos</span>

        </div>
        <div style="display: flex; align-items: center;">
          <p @click="promoDialog" style="font-size: 12px; font-weight: 800; margin-right: 6px; color: BLACK;">More</p>
          <font-awesome-icon icon="angle-right" color="black" />
        </div>
      </div> -->



      <div class="carousel-container" style="max-width: 600px; margin: 0px auto;" >
        <Carousel v-if="!selectedPromo" :autoplay="5000" :wrap-around="true"  >
          <Slide v-for="promos in promo" :key="promos.id"  >
            <img :src="promos.banner" alt="Promo Banner" class="carousel-image carousel__item" style="height: 100px" @click="selectPromo(promos)">
          </Slide>
        </Carousel>
      </div>


      
      <div style="max-width: 600px; margin: 0px auto; display: flex; gap: 10px !important; justify-content: space-between;" v-if="selectedPromo" >

        <div class="d-flex flex-column ">
          <span style="font-size: 12px;">Katalog Promo</span>

          <span style="max-width: 600px; font-size: 18px; font-weight: 800; color: black;">
            {{ selectedPromoName }}
          </span>
          <span style="max-width: 600px; font-size: 12px; font-weight: 500; color: black;">
            Berakhir dalam {{ selectedPromoValidUntil }}
          </span>
        </div>

        <div style="display: flex; align-items: center;">

          <font-awesome-icon class="mx-2" icon="magnifying-glass" color="#9c9c9c" size="xs" style="position: absolute;" />
          <input type="" name="" class="custom-input" style=" max-width: 140px;" placeholder="Cari Produk" />

        </div>

      </div>

      <div v-if="selectedPromo" class="flex-container mt-4" style="max-width: 600px; margin: 0px auto; margin-bottom: 96px;">
        <div v-for="product in produk" :key="product.id" class="flex-item" @click="openDialog(product)">
          <img cover :src="product.image" :alt="product.name" style="width: 100%; height: 121px; display: block;" />
          <div class="product-info">
            <p style="font-size: 16px; font-weight: 800;">{{ product.name }}</p>
            <p style="font-size: 12px; font-weight: 600;">Quantity: {{ product.quantity }}</p>
            <p style="font-size: 12px; font-weight: 600;">Limit: {{ product.limit }}</p>
          </div>
          <button class="button-text-bold mt-6 custom-button" style="height: 30px; border-radius: 6px; width: 100%; padding: 4px 6px; background-color: #006bb8;">Edit</button>
        </div>
      </div>


      <div v-else size="xl2" style="height: 200px; max-width: 600px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <font-awesome-icon icon="wind" class="fa-2xl" color="#ccc" />
        <p class="mt-2" style="font-size: 12px; color: #aaa;" >Pilih Promo terlebih dahulu</p>
      </div>


      <!-- Dialog saat membuka tiap item -->
      <!-- Dialog saat membuka tiap item -->
      <!-- Dialog saat membuka tiap item -->
      <!-- Dialog saat membuka tiap item -->


      <v-dialog v-model="dialogItem" max-width="400px" style="font-family: 'M PLUS Rounded 1c', sans-serif;">
        <v-card style="padding: 20px; box-shadow: none; border-radius: 16px; overflow: scroll;">
          <img :src="selectedProduct.image" :alt="selectedProduct.name" class="mx-auto" style="width: 100%; height: 80%; width: 200px; height: 200px; display: block;" />

          <p style="font-size: 20px; font-weight: 800;">
            {{ selectedProduct.name }}
          </p>
          <p class="mb-2" style="font-size: 14px;">{{ selectedProduct.desc }}</p>

          <div class="my-6 mx-auto" style="display: flex; gap: 12px; height: 28px;">
            <!-- <div class="text-center button-text-bold2" style="border-radius: 6px; display: inline-block; padding: 4px 8px; background-color: #FFA33C; color: white;"> 
              <font-awesome-icon icon="circle-exclamation" color="white" class="mr-2" />Max: {{ selectedProduct.limit }}

            </div>
            <div class="text-center button-text-bold2" style="border-radius: 6px; display: inline-block; padding: 4px 8px; background-color: #0aab30; color: white;"> 
              <font-awesome-icon icon="cart-shopping" color="white" class="mr-2"/>Qty: {{ selectedProduct.quantity }}

            </div> -->

            <div style="height: 36px; display: flex; align-items: center; border-radius: 6px; padding: 0px 4px; margin: 0px; border: 1px solid #ddd; gap: 12px;">
              <button @click="decrement()" :disabled="selectedProduct.quantity <= 0" class="disable-dbl-tap-zoom" style="padding: 2px 8px; border-radius: 6px; background-color: #abdcff;">
                <font-awesome-icon class="iconOnButton" icon="minus" color="#007dd6" />
              </button>
              <p style="font-size: 14px;"><input style="max-width: 20px; outline: none" type="number" name="quantity" v-model="selectedProduct.quantity" :max="selectedProduct.limit" @input="handleQuantityInput">/ {{ selectedProduct.limit }}</p>
              
              <button class="disable-dbl-tap-zoom" :disabled="selectedProduct.quantity === selectedProduct.limit" @click="increment()" style="padding: 2px 8px; border-radius: 6px; background-color: #abdcff;">
                <font-awesome-icon class="iconOnButton" icon="plus" color="#007dd6" />
              </button>
            </div>
          </div>

          <div v-if="minWarning" v-motion-pop-visible>
            <p style="position: absolute; margin-left: auto; margin-right: auto; left: 0; right: 0; text-align: center; text-align: center; color: #fc0f5e; font-size: 12px; font-weight: 800;">Add Quantity</p>
          </div>

          <v-card-actions style="gap: 6px;" class="mt-4">
            <button class="custom-button" style="font-size: 12px; color: white; font-weight: 800; height: 44px; border-radius: 6px; width: 72px; padding: 4px 6px; background-color: #eb5454;" @click="closeDialog">Cancel</button>
            <button
            v-if="showAddButton"
            class="custom-button"
            :disabled="selectedProduct.quantity <= 0"
            style="
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100% !important;
            font-size: 12px;
            color: white;
            font-weight: 800;
            height: fill;
            border-radius: 6px;
            padding: 6px 12px;
            background-color: #30ba3e;
            "
            @click="closeDialog"
            >
            <div style="display: flex; flex-direction: column; align-items: center;">
              <span style="width: 100%; font-size: 10px; text-align: left;">{{selectedProduct.quantity}} Items</span>
              <span>Rp.{{selectedProduct.price}}</span>
            </div>
            <div>
              <div style="display: flex; align-items: center;">
                <p @click="promoDialog" class="mr-2" style="display: flex; flex-direction: column; font-size: 10px; font-weight: 800; color: white; text-align: right;">
                  Buy
                  <span style="width: 100%; text-align: left; font-size: 12px;">{{selectedProduct.point}}</span>
                </p>
                <font-awesome-icon icon="angle-right" color="white" />
              </div>
            </div>
          </button>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Dialog saat membuka list promo -->
    <!-- Dialog saat membuka list promo -->
    <!-- Dialog saat membuka list promo -->
    <!-- Dialog saat membuka list promo -->
    <!-- Dialog saat membuka list promo -->

    <v-dialog persistent v-model="dialogPromo" max-width="500px" style="font-family: 'M PLUS Rounded 1c', sans-serif;">
      <v-card style="padding: 20px; box-shadow: none; border-radius: 16px; overflow: scroll;">
        <div class="d-flex justify-space-between">
          <div class="mb-4" style="display: flex; align-items: center;">
            <button @click="promoDialog" class="circular-banner">
              <font-awesome-icon icon="percent" size="xs2" />
            </button>
            <span class="mx-2" style="max-width: 600px; margin-left: 2px; font-size: 24px; font-weight: 800; color: black;"> Promo</span>

          </div>

        </div>

        <div style="display: flex; align-items: center;">
          <font-awesome-icon class="mx-2" icon="magnifying-glass" color="#9c9c9c" size="xs" style="position: absolute;" />
          <input type="" name="" class="custom-input" style="width: 100% !important;" placeholder="Cari Promo" />
        </div>

        <p v-if="selectedPromo" class="mt-4" style="font-size: 12px; text-align: left; font-weight: 800;">Promo terpilih: {{ selectedPromoName }}</p>

        <p v-else class="mt-4" style="font-size: 12px; text-align: left; font-weight: 800;">Promo Tersedia</p>



        <v-divider class="my-2"></v-divider>
        <div v-for="promos in promo" :key="promos.id" class="custom-radio">
          <label :for="'promo' + promos.id" class="custom-radiobutton">
            <div style="display: flex; align-items: center;">
              <img :src="promos.image" class="product-image mr-4">
              <div style="display: flex; flex-direction: column;">
                <p style="font-size: 12px; font-weight: 700; text-align: left">{{ promos.name }}</p>
                <p style="font-size: 10px; text-align: left">{{ promos.description }}</p>
              </div>
            </div>
            <p style="font-size: 10px; text-align: center">{{ promos.valid_until }}</p>
          </label>
          <input type="radio" :id="'promo' + promos.id" v-model="selectedPromo" :value="getSelectedPromo(promos)" class="visually-hidden">
        </div>

        <div style="display: flex; gap: 14px !important;" class="mx-auto mt-4">
          <button class="custom-button" style="font-size: 12px; color: white; font-weight: 800; height: 40px; border-radius: 6px; width: 100%; padding: 4px 6px; background-color: #eb5454;" @click="dialogPromo = false; closePromoDialog()">Kembali</button>
          <button :disabled=" this.selectedPromo === null" class="custom-button" style="font-size: 12px; color: white; font-weight: 800; height: 40px; border-radius: 6px; width: 72px; padding: 4px 6px; background-color: #006bb8;" @click="dialogPromo = false">Pilih</button>
        </div>

      </v-card>
    </v-dialog>

    <!-- Dialog saat membuka list transaksi -->
    <!--  -->

  </div>
</div>
</template>

<script>
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import { Carousel, Slide } from 'vue3-carousel';
  import 'vue3-carousel/dist/carousel.css'


  export default {
    components: {
      FontAwesomeIcon,
      Carousel,
      Slide,
    },
    data() {
      return {
        buttonAdd: true,
        minWarning: false,
        showAddButton: true,
        selectedPromo: null,
        selectedProduct: {
          quantity: 0,
          limit: 0,
        },
        dialogItem: false,
        dialogPromo: false,
        produk: [
        {
          id: 1,
          name: "Genteng A",
          desc: "A roof is the upper covering of a building or structure that provides shelter and protection from the elements, such as rain, snow, sunlight, and wind.",
          image: "https://atlas-content-cdn.pixelsquid.com/stock-images/roof-mr1Kdw9-600.jpg",
          banner: '',
          quantity: 0,
          limit: 5,
          price: 100,
          point: 2000,
        },
        {
          id: 2,
          name: "Genteng B",
          image: "https://static.vecteezy.com/system/resources/thumbnails/026/959/207/small/mockup-temple-roof-orange-tile-pattern-png.png",
          desc: "A roof is the upper covering of a building or structure that provides shelter and protection from the elements, such as rain, snow, sunlight, and wind.",

          quantity: 0,
          limit: 50,
        },
        {
          id: 3,
          name: "Genteng C",
          image: "https://static.vecteezy.com/system/resources/thumbnails/021/594/326/small/new-brown-roof-of-home-png.png",
          desc: "A roof is the upper covering of a building or structure that provides shelter and protection from the elements, such as rain, snow, sunlight, and wind.",

          quantity: 0,
          limit: 50,
        },
        {
          id: 4,
          name: "Genteng D",
          desc: "A roof is the upper covering of a building or structure that provides shelter and protection from the elements, such as rain, snow, sunlight, and wind.",

          image: "https://atlas-content-cdn.pixelsquid.com/stock-images/roof-mr1Kdw9-600.jpg",
          quantity: 0,
          limit: 50,
        },
        {
          id: 5,
          name: "Gented E",
          desc: "A roof is the upper covering of a building or structure that provides shelter and protection from the elements, such as rain, snow, sunlight, and wind.",

          image: "https://atlas-content-cdn.pixelsquid.com/stock-images/roof-mr1Kdw9-600.jpg",
          quantity: 0,
          limit: 1,
        },
        ],

        promo: [
        {
          id: 1,
          image: "https://png.pngtree.com/png-clipart/20231204/original/pngtree-merry-christmas-and-happy-new-year-vector-png-image_13769780.png",

          name: "Natal & Tahun Baru",
          description: "Discount on all electronic items.",
          valid_until: "7 Hari",
          banner: 'https://img.freepik.com/premium-vector/christmas-sale-vector-banner-design-christmas-limited-offer-promo-discount-pink-background_572288-2956.jpg?w=2000'
        },
        {
          id: 2,
          image: "https://png.pngtree.com/png-clipart/20220206/original/pngtree-lampion-imlek-png-image_7262343.png",

          name: "Imlek",
          description: "Buy one item and get another one for free.",
          valid_until: "6 Hari",
          banner: 'https://static.vecteezy.com/system/resources/previews/001/545/907/non_2x/celebrate-chinese-new-year-sale-banner-free-vector.jpg'
        },
        {
          id: 3,
          image: "https://freepngimg.com/download/black_friday/26777-8-black-friday-picture.png",

          name: "Black Friday",
          description: "Enjoy special discounts on Groceries.",
          valid_until: "11 Hari",
          banner: 'https://www.flagsandflagpoles.co.uk/cdn/shop/files/Black-friday-banner-01_1400x.png?v=1698156704'
        },
        ],
      };
    },

    
    mounted() {
    // Set initial values based on the first product in the array
    this.selectedProduct.limit = this.produk[0].limit;
  },

  computed: {
    selectedPromoName() {
      if (this.selectedPromo) {
        const parsedPromo = JSON.parse(this.selectedPromo);
        return parsedPromo.name || '';
      }
      return '';
    },
    selectedPromoValidUntil() {
      if (this.selectedPromo) {
        const parsedPromo = JSON.parse(this.selectedPromo);
        return parsedPromo.valid_until || '';
      }
      return '';
    },


  },

  methods: {

    handleQuantityInput() {
        // Enforce a minimum limit (e.g., 0)
        if (this.selectedProduct.quantity < 0) {
          this.selectedProduct.quantity = 0;
        }
        // Enforce a maximum limit based on selectedProduct.limit
        if (this.selectedProduct.quantity > this.selectedProduct.limit) {
          this.selectedProduct.quantity = this.selectedProduct.limit;
        }
      },

      selectPromo(promos) {
        // Perform any additional logic you need
        this.selectedPromo = this.getSelectedPromo(promos);
      },

      getSelectedPromo(promos) {
        const selectedPromo = {
          valid_until: promos.valid_until,
          name: promos.name,

        };

        return JSON.stringify(selectedPromo);
      },
      increment() {
        if (this.produk.quantity === this.produk.limit || this.selectedProduct.quantity === this.produk.limit) {
          this.selectedProduct.quantity++;
          this.minWarning = false;
        } else {
          this.authMessageSuccess = "Login Berhasil!";
        }
      },
      decrement() {
        if (this.produk.quantity === 0 || this.selectedProduct.quantity === 0) {
          this.minWarning = true;
        } else {
          this.selectedProduct.quantity--;
        }
      },

      promoDialog() {
        this.dialogPromo = true;
      },

      openDialog(product) {
        this.selectedProduct = product;
        this.dialogItem = true;
      },
      closeDialog() {
        this.dialogItem = false;
      },

      closePromoDialog(){
        this.selectedPromo = null;
      }
    },
  };
</script>

<style type="text/css" scoped>
  @media (max-width: 768px) {
    .name {
      display: none;
    }

    .custom-location {
      visibility: visible !important;
    }
  }
  .custom-location {
    visibility: hidden;
  }
  .center-custom {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .flex-container-button {
    display: grid !important;
    gap: 15px; 
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    max-width: 650px;
    justify-content: center;
  }

  .flex-item-button {
    padding: 12px;
    display: grid !important;
    border: 1px solid #ddd;
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
    border: 1px solid #eee;
    border-radius: 6px;
    min-height: auto;
    height: 100%;
    max-height: 900px;
    max-width: 200px;
  }

  .circular-banner {
    width: 36px; 
    height: 36px;  
    border-radius: 6px;
    background-color: #f5fc0f; 
    border: none;
    color: #006bb8; 
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;  
  }

  .circular-button {
    width: 45px;  
    height: 45px;  
    border-radius: 50%;
    background-color: #f5fc0f; 
    border: none;
    color: #006bb8; 
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;  
    margin-bottom: 8px;
  }

  .button-text-bold {
    font-size: 12px !important;
    font-weight: 800 !important;
    color: white;
  }

  .button-text-bold2 {
    font-size: 12px !important;
    font-weight: 800 !important;
    color: white;
  }

  .background1 {
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle, #006bb8 0.5px, transparent 0.4px), radial-gradient(circle, #006bb8 1px, transparent 0.9px), radial-gradient(circle, #006bb8 2px, transparent 1.8px);
    background-size: 36px 36px;
    background-position: 0 0, 18px 18px, 36px 36px;
  }

  .custom-input {
    background-color: #fafafa;
    width: 100% !important;
    padding-left: 24px !important;
    font-size: 14px !important;
    padding: 5px 8px;
    border-radius: 6px;
    outline: none;
    transition: outline 0.3s ease-in-out;
  }
  .custom-input:focus {
    background-color: #fafafa;
    width: 150px;
    border-radius: 6px;
    outline: 0 px solid #4682a9;
    font-size: 14px !important;
  }
  .custom-input::placeholder {
    color: #999;
    font-size: 14px;
    padding-left: -1px;
  }

  .disable-dbl-tap-zoom {
    touch-action: manipulation;
  }

  .disable-dbl-tap-zoom:disabled .iconOnButton {
    color: #7fc6fa !important;
  }

  .disable-dbl-tap-zoom:disabled {
    touch-action: manipulation;

    background-color: #c8e5fa !important;
  }
  .custom-button {
    transition: opacity 0.3s ease-in-out;
  }

  .custom-button:hover {
    opacity: 0.7;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  .custom-button:disabled {
    opacity: 0.7;
  }

  .product-image {
    width: 55px; 
    height: 100%; 
    display: block;
  }


  .custom-radio input[type="radio"] {
   display: none;
 }

 .custom-radio label {
   gap: 16px;
   justify-content: space-between;
   margin: 6px 0px;
   padding: 12px 12px;
   border-radius: 6px;
   display: flex;
   align-items: center;
   border: 1px solid #eee;
   cursor: pointer;
 }

 .custom-radio label:hover {
 }


 .visually-hidden {
   position: absolute;
   width: 1px;
   height: 1px;
   padding: 0;
   overflow: hidden;
   clip: rect(0, 0, 0, 0);
   border: 0;
   opacity: 0;
 }

 .custom-radiobutton {
  transition: opacity 0.3s ease-in-out;
}

.custom-radiobutton:hover {
  opacity: 0.7;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  outline: #006bb8 solid 2px;
}






</style>

<style lang="scss">
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }


  ::-webkit-scrollbar {
    display: none !important;
  }

  ::-webkit-scrollbar-track {
    background-color: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
  }

  ::-webkit-scrollbar-thumb:horizontal {
    height: 10px;
  }

  ::-webkit-scrollbar-thumb:vertical {
    width: 10px;
  }
</style>
