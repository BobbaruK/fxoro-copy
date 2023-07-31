<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
  layout: "no-footer",
});

useCheckLang();

const user = useSupabaseUser();
const supabase = useSupabaseClient();

const logout = async () => {
  // 1 make user.value = null
  // 2 remove jwt fromn cookie browser
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
  }
  // 3 navigate to home page
  navigateTo("/login");
};
</script>

<template>
  <section id="section1-profile" class="subHeader">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <!-- <ColorMode /> -->
          <div v-if="user">
            <h1>{{ user.user_metadata.user_name }}</h1>
            <p>{{ user.user_metadata.full_name }}</p>
            <p>
              <NuxtImg :src="user.user_metadata.avatar_url" />
            </p>
            <p>{{ user.user_metadata.email }}</p>
            <button @click="logout">logout</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
