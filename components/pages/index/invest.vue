<script lang="ts" setup>
const email = ref("");
const form = ref({
  email: "",
  number: "",
  office_address: "",
});

const handleSubmit = () => {
  const emailBody = `Email: ${form.value.email}\nOffice Address: ${form.value.office_address}\nNumber: ${form.value.number}`;
  const emailSubject = "Form Submission";
  const emailTo = "contact@toolsforthecommons.com";

  const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;
  window.location.href = mailtoLink;
};
</script>

<template>
  <section class="py-8" id="invest-page">
    <form @submit.prevent="handleSubmit">
      <div
        class="flex flex-col w-full justify-center items-center gap-4 lg:gap-8"
      >
        <h2 class="text-2xl">Get in touch</h2>

        <div class="flex flex-row gap-4 w-full justify-between">
          <form-input
            type="email"
            required
            v-model="form.email"
            label="Email"
          />
          <form-input required v-model="form.number" label="Number" />
          <form-input
            required
            v-model="form.office_address"
            label="Office address"
          />
          <button
            type="submit"
            class="border border-slate-200 dark:border-zinc-600 background- px-4"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped></style>
