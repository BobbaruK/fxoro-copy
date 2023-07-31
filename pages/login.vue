<script setup lang="ts">
useCheckLang();
const switchLocalePath = useSwitchLocalePath();

// definePageMeta({
//   name: "Login",
// });

const supabase = useSupabaseClient();

const user = useSupabaseUser();

const googleLogin = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    // options: {
    //   redirectTo: "https://www.google.com",
    // },
  });

  if (error) {
    console.error(error);
  }

  navigateTo("/profile");
};

const githubLogin = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "/profile",
    },
  });

  if (error) {
    console.error(error);
  }
};
</script>

<template>
  <section id="section1-login" class="subHeader">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div>
            {{ user }}
            <h1>Log in</h1>
            <button @click="googleLogin">Login with google</button>
            <br />
            <button @click="githubLogin">Login with github</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
