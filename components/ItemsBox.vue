<template>
  <div class="items__box">
    <!-- SORTING ITEMS  -->
    <select class="sort__select" name="sort" id="sort" v-model="keyToSort" @click.prevent="sort">
      <option value="default" @click.prevent="sort">По умолчанию</option>
      <option value="min" @click.prevent="sort">По возрастанию цены</option>
      <option value="max" @click.prevent="sort">По убыванию цены</option>
    </select>
    <!-- ITEMS LIST  -->
    <div class="items__wrapper">
      <div class="item" v-for="item in getItems" :key="item.id" :id='item.id'>
        <div class="image__wrapper">
          <img :src=item.image :alt="item" class="item__image">
        </div>

        <h3 class="item__name">
          {{ item.name }}
        </h3>

        <p class="item__description">
          {{ item.description }}
        </p>

        <span class="item__price">
          {{ item.price }} руб.
        </span>

        <button class="delete__button" @click.prevent="removeItem">
          <img src="../static/assets/images/del_logo.png" alt="" class="delete">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  name: 'items',
  data() {
    return {
      keyToSort: 'default'
    }
  },
  computed: {
    ...mapGetters(['getItems'])
  },
  methods: {
    ...mapMutations(['deleteItem','sortItems']),
    // REMOVE ITEM
    removeItem: function(e) {
      const button = e.target;
      let item = button.parentElement;

      if (button.classList.contains('delete')) {
        item = button.parentElement.parentElement;
      }

      item.style = 'animation: deleteItem 1s ease; opacity: 0'
      setTimeout(() => {this.deleteItem(item.id)}, 900)
    },
    // SORT ALL ITEMS
    sort: function() {
      this.sortItems(this.keyToSort)
    },
    // 
  }
}
</script>

<style lang='scss'>
.items__box {
  width: 100%;
  position: relative;
  color: $black;

  .sort__select {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 18px;
    padding: 10px 16px;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    color: #8a8a8a;
    font-size: 12px;
  }

  .items__wrapper {
    margin: 0 auto;
    width: 90%;
    padding: 52px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
    transition: all .4s ease;

    .item {
      animation: loaded 1s;
      cursor: pointer;
      position: relative;
      max-width: 332px;
      background: #FFFEFB;
      border-radius: 4px;
      box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
      transition: all .3s ease;
      
      .image__wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        max-height: 200px;
        overflow: hidden;
        border-radius: 4px 4px 0 0;

        .item__image {
          max-width: 332px;
        }
      }

      .item__name, .item__description, .item__price {
        margin: 0 16px;
      }

      .item__name {
        margin: 16px;
        font-weight: 600;
        font-size: 20px;
      }

      .item__description {
        margin-bottom: 32px;
        font-size: 16px;
        line-height: 20px;
      }
      
      .item__price {
        display: inline-block;
        margin-bottom: 24px;
        font-weight: 600;
        font-size: 24px;
      }

      .delete__button {
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translateX(20%) translateY(-20%);
        border: none;
        border-radius: 10px;
        padding: 8px 9.5px;
        background: $coral;
        display: none;
        transition: all .4s ease;
      }
      .delete__button:disabled {
        cursor: not-allowed !important;
        pointer-events: all !important;
      }
      .delete__button:hover {
        background: #ff5151;
      }
    }
    .item:hover {
      transform: translateY(-5px);
      box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1), 0px 6px 10px rgba(0, 0, 0, 0.08);
      .delete__button {
        display: block;
      }
    }
  }
}

@media (max-width: 440px) {
  .items__box {
    width: 100%;
    margin-top: 24px;
    
    .sort__select {
      top: 4px;
      right: 2%;
      background: none;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    }
    
    .items__wrapper {
      width: 96%;
      display: grid;
      grid-template-columns: 1fr;
      margin: 0 auto;

      .item {
        max-width: none;
        width: 100%;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1), 0px 6px 10px rgba(0, 0, 0, 0.08);

        .image__wrapper {
          max-width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          max-height: 200px;
          overflow: hidden;
          border-radius: 4px 4px 0 0;

          .item__image {
            max-height: none;
            max-width: none;
            width: 100%;
          }
        }
        
        .item__name, .item__description, .item__price {
          margin: 4px 16px;
        }

        .delete__button {
          display: block;
          transform: translateX(10%) translateY(-10%);
          border-radius: 4px;
          background: $coral;
        }
      }
    }
  }
} 

@keyframes deleteItem {
  from {
    height: 100%;
    transform: translateY(0) rotate(0);
    opacity: 1;
  }

  to {
    height: 0%;
    transform: translateY(100px);
    opacity: 0;
  }
} 
@keyframes loaded {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
} 

 
</style>