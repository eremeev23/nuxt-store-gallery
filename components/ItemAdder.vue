<template>
  <div class="adder__box">
    <h1>Добавление товара</h1>

    <form class="add-item__form">
      <label for="item-name" class="label required">
        <span class="label-span">Наименование товара</span>
      </label>
      <input class="input__text" type="text" id="item-name" name="item-name" v-model="name" placeholder="Введите наименование товара" required>

      <label for="item-description" class="label">
        <span>Описание товара</span>
      </label>
      <textarea name="item-description" id="item-description" v-model="description" placeholder="Введите описание товара"></textarea>

      <label for="image-url" class="label required">
        <span class="label-span">Ссылка на изображение товара</span>
      </label>
      <input class="input__text" type="url" id="image-url" 
        name="image-url"
        placeholder="Введите ссылку"
        v-model="image"
        pattern="https://.*"
        required>

      <label for="item-price" class="label required">
        <span class="label-span">Цена товара</span>
      </label>
      <input class="input__text" type="text" id="item-price"
        name="item-price" 
        placeholder="Введите цену" 
        v-model="price"
        required>

      <button type="submit" class="add__button">Добавить товар</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'adder',
  data() {
    return {
      name: '',
      description: '',
      image: '',
      price: ''
    }
  }
}
</script>

<style lang='scss'>
.adder__box {
  max-width: 25%;
  color: #3F3F3F;

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    margin: 4px 0 16px;
  }

  .add-item__form {
    display: flex;
    flex-direction: column;
    padding: 24px;
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    
    .label {
      font-size: 10px;
    }
    .required span {
      position: relative;
    }
    .required span::after {
      position: absolute;
      content: '';
      top: 0;
      right: -6px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: $coral;
    }

    .input__text {
      width: 284px;
      margin: 4px 0 16px;
      padding: 10px 16px;
      border: none;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

      font-size: 12px;
      line-height: 15px;
    }
    .input__text::placeholder {
      color: $grey;
    }

    #item-description {
      min-height: 108px;
      margin-bottom: 16px;
      padding: 10px 16px;
      resize: vertical;
      border: none;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    }
    #item-description::placeholder {
      color: $grey;
    }

    .add__button {
      cursor: pointer;
      border: none;
      border-radius: 10px;
      padding: 10px 0;
      background: $green;
      color: #fff;
      font-weight: 600;
      font-size: 12px;
      transition: all .3s ease;
    }
    .add__button:hover {
      background: #53a147;
    }
    .add__button:disabled {
      background: #EEEEEE;
      color: $grey;
    }
  }
}
</style>