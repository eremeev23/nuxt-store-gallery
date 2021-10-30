<template>
  <div class="adder__box">
    <h1>Добавление товара</h1>
    
    <form class="add-item__form" @submit.prevent="addItem">
      
      <div class="input__box">
        <label for="item-name" class="label required">
          <span class="label-span">Наименование товара</span>
        </label>
        <input @input="filledCheck" class="input__text" type="text" id="item-name" name="item-name" v-model="name" placeholder="Введите наименование товара" required>
        <span class="invalid__span">Обязательное поле</span>
      </div>

      <div class="input__box">
        <label for="item-description" class="label">
          <span>Описание товара</span>
        </label>
        <textarea name="item-description" id="item-description" v-model="description" placeholder="Введите описание товара"></textarea>
      </div>

      <div class="input__box">
        <label for="image-url" class="label required">
          <span class="label-span">Ссылка на изображение товара</span>
        </label>
        <input @input="filledCheck" class="input__text" type="url" id="image-url" 
          name="image-url"
          placeholder="Введите ссылку"
          v-model="image"
          pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)"
          required>
          <span class="invalid__span">Обязательное поле</span>
      </div>

      <div class="input__box">
        <label for="item-price" class="label required">
          <span class="label-span">Цена товара</span>
        </label>
        <input @input="filledCheck" class="input__text input__number" type="number" id="item-price"
          name="item-price" 
          placeholder="Введите цену" 
          v-model="price"
          required>
          <span class="invalid__span">Обязательное поле</span>
      </div>

      <button type="submit" class="add__button" disabled>Добавить товар</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'adder',
  props: {
    items__array: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      id: this.items__array.length + 1,
      name: '',
      description: '',
      image: '',
      price: '',
      formFilled: false,
    }
  },
  methods: {
    ...mapMutations(['addNewItem']),

    filledCheck: function() {
      const required = document.querySelectorAll('.input__text');
      const textArea = document.querySelector('#item-description');
      const submitBtn = document.querySelector('.add__button');

      submitBtn.classList.remove('added')
      submitBtn.innerText = 'Добавить товар'

      if (textArea.value) {
        textArea.style = 'border: 1px solid #7BAE73; border-radius: 4px';
      } else {
        textArea.style = 'border: none;';
      }

      required.forEach(input => {
        if (!input.value) {
          const span = input.parentElement.children[2];
          span.classList.add('required__field');
          input.style = 'border: 1px solid #FF8484; border-radius: 4px';
        } else {
          const span = input.parentElement.children[2];
          span.classList.remove('required__field');
          input.style = 'border: 1px solid #7BAE73; border-radius: 4px';
        }
      })

      if ([...required].every(input => input.value)) {
        this.formFilled = true;
      } else {
        this.formFilled = false;
      }

      if (this.formFilled) {
        submitBtn.removeAttribute('disabled')
      } else {
        submitBtn.setAttribute('disabled', true)
      }
    },

    addItem: function() {
      let x = this.price;
      let size = 3;
      let subarray = [];

      x = x.split('').reverse();

      for (let i = 0; i < Math.ceil(x.length/size); i++) {
        subarray[i] = x.slice((i*size), (i*size) + size);
      }

      for (let i = 0; i < subarray.length; i++) {
        subarray[i] = subarray[i].reverse().join('')
      }

      let price = subarray.reverse().join(' ');

      this.addNewItem({
        id: this.id,
        name: this.name,
        description: this.description,
        image: this.image,
        price: price
      })

      this.name = '';
      this.description = '';
      this.image = '';
      this.price = '';

      const required = document.querySelectorAll('.input__text');
      const submitBtn = document.querySelector('.add__button');

      submitBtn.classList.add('added')
      submitBtn.innerText = 'Добавлено'
      submitBtn.setAttribute('disabled', true)

      required.forEach(input => {
          input.style = 'border: none';
      })
    }
  }
}
</script>

<style lang='scss'>
.adder__box {
  width: 25%;
  color: $black;

  h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      margin: 4px 0 13px;
  }

  .add-item__form {
    display: flex;
    flex-direction: column;
    padding: 24px;
    background: #FFFEFB;
    color: $dark;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);

    
    .input__box {
      position: relative;
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;

      .label {
        font-size: 12px;
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
        width: 100%;
        max-width: 284px;
        margin: 4px 0 16px;
        padding: 10px 16px;
        border: none;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        font-size: 12px;
        line-height: 15px;
        transition: all .3s ease;
      }
      .input__text:focus, #item-description:focus {
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
      }
      .input__text:valid:required {
        outline: $green;
        border: 1px solid #7BAE73;
        border-radius: 4px
      }
      .input__text:invalid:required {
        outline: $coral;
        border-radius: 4px
      }
      .input__text::placeholder {
        color: $grey;
      }

      .input__number::-webkit-inner-spin-button, 
      .input__number::-webkit-outer-spin-button {
        display: none;
        -webkit-appearance: none;
      }

      #item-description {
        outline: none;
        font-family: 'Source Sans Pro', sans-serif;
        min-height: 108px;
        margin-bottom: 16px;
        padding: 10px 16px;
        resize: none;
        border: none;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        transition: all .3s ease;
      }
      #item-description::placeholder {
        color: $grey;
      }

      .invalid__span {
        display: none;
      }
      .required__field {
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: 0;
        font-size: 10px;
        color: $coral;
      }
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
    .added {
      background: $dark;
    }
  }
}

@media (max-width: 440px) {
  .adder__box {
    width: 100%;
    padding: 0 8px;
    .add-item__form {
      box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.3);
      .input__box {

        .input__text {
          width: 100%;
          max-width: none;
          margin: 4px 0 16px;
          padding: 10px 16px;
          border: none;
          box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.3);

          font-size: 12px;
          line-height: 15px;
        }
        .input__text:valid:required {
          outline: $green;
          border: 1px solid #7BAE73;
          border-radius: 4px
        }
        .input__text:invalid:required {
          outline: $coral;
          border-radius: 4px
        }
        .input__text::placeholder {
          color: $grey;
        }
        .input__number::-webkit-inner-spin-button, 
        .input__number::-webkit-outer-spin-button {
          display: none;
          -webkit-appearance: none;
        }

        #item-description {
          font-family: 'Source Sans Pro', sans-serif;
          min-height: 108px;
          margin-bottom: 16px;
          padding: 10px 16px;
          resize: vertical;
          border: none;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
        }
        #item-description::placeholder {
          color: $grey;
        }

        .invalid__span {
          display: none;
        }
        .required__field {
          display: inline-block;
          position: absolute;
          bottom: 0;
          left: 0;
          font-size: 10px;
          color: $coral;
        }
      }
    }   
  }
}
</style>