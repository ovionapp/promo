<template>
  <div class="max-w-md mx-auto">
    <div class="text-center pt-20">
      <h1 id="logo">
        Ovion
      </h1>

      <h2 class="text-lg text-gray-600 mb-32">
        The CMS worth comitting to
      </h2>

      <div id="subscribe" class="bg-gray-200 px-6 pt-10 pb-12 rounded-lg">
        <h3 class="text-lg text-gray-700 pb-4">
          Subscribe to get early access
        </h3>

        <form action="https://gmail.us10.list-manage.com/subscribe/post?u=ebcc7d2c2e9d534cf543fc409&amp;id=31c31b3353"
          method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
          class="validate" target="_blank" novalidate>
          <div class="flex">
            <input type="hidden" name="b_ebcc7d2c2e9d534cf543fc409_31c31b3353"
              tabindex="-1" value="">
            <input type="email" value="" name="EMAIL" id="mce-EMAIL"
              placeholder="Your email address"
              class="required email rounded-l px-3 py-2 focus:outline-none w-2/3 md:w-3/4">
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"
              class="button bg-yellow-500 text-black px-3 py-2 rounded-r w-1/3 md:w-1/4">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
#logo {
  background-color: #101010;

  @apply inline-block;
  @apply text-4xl;
  @apply text-gray-100;
  @apply uppercase;
  @apply font-bold;
  @apply tracking-wide;

  padding-top: 3.5rem;

  @apply pb-16;
  @apply px-6;
  @apply rounded-lg;
  @apply mb-8;
}
</style>
