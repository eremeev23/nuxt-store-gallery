<template>
  <div class="adder__box">
    <h1>Добавление товара</h1>

    <form class="add-item__form">
      <label for="item-name" class="label">
        <span class="label-span">Наименование товара</span>
      </label>
      <input class="input__text" type="text" id="item-name" name="item-name" required>

      <label for="item-description" class="label">
        <span>Описание товара</span>
      </label>
      <textarea name="item-description" id="item-description"></textarea>

      <label for="image-url" class="label input-label">
        <span class="label-span">Ссылка на изображение товара</span>
      </label>
      <input class="input__text" type="url" name="image-url" id="image-url"
       placeholder="Введите ссылку"
       pattern="https://.*"
       required>

      <label for="item-price" class="label input-label">
        <span class="label-span">Цена товара</span>
      </label>
      <input class="input__text" type="text" id="item-price" name="item-price" required>

      <button type="submit">Добавить товар</button>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.adder__box {
  width: 440px;
  max-width: 440px;
  color: #3F3F3F;
}
.add-item__form {
  display: flex;
  flex-direction: column;
  padding: 24px;
}
</style>