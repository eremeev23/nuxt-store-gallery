<template>
  <div class="items__box">
    <!-- SORTING ITEMS  -->
    <select class="sort__select" name="sort" id="sort">
      <option value="default">По умолчанию</option>
      <option value="min">По возрастанию цены</option>
      <option value="max">По убыванию цены</option>
    </select>
    <!-- ITEMS LIST  -->
    <div class="items__wrapper">
      <div class="item" v-for="item in getItems" :key="item.id">
        <img :src=item.image :alt="item">
        <h3 class="item__name">
          {{ item.name }}
        </h3>
        <p class="item__description">
          {{ item.description }}
        </p>
        <span class="item__price">
          {{ item.price }} руб.
        </span>
        <button class="delete__button">
          <img src="../static/assets/images/del_logo.png" alt="" class="delete">
        </button>
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'items',
  computed: {
    ...mapGetters(['getItems'])
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
    right: 0;
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

    .item {
      cursor: pointer;
      position: relative;
      max-width: 332px;
      background: #FFFEFB;
      border-radius: 4px;
      box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);

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
        transform: translateX(30%) translateY(-30%);
        border: none;
        border-radius: 10px;
        padding: 8px 9.5px;
        background: $coral;
        display: none;
      }
    }
    .item:hover {
      .delete__button {
        display: block;
      }
    }
  }
}

  


  
  
  
</style>