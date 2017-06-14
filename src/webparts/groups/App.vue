<template>
  <div>
    <ul>
      <li v-for="group in groups">
        {{ group.name }}
        <ul>
          <li v-for="member in group.members">
            {{ member }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
module.exports = require('./App');
</script>