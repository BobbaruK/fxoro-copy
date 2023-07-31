<script setup lang="ts">
const { t, locale } = useI18n({
  useScope: "local",
  messages: {
    en: {
      profile: "Profile",
      login: "Login",
    },
    it: {
      profile: "Profilo",
      login: "Accesso",
    },
    tr: {
      profile: "Profil",
      login: "Giriş yap",
    },
    ro: {
      profile: "Profil",
      login: "Autentificare",
    },
    ar: {
      profile: "الملف الشخصي",
      login: "تسجيل الدخول",
    },
    de: {
      profile: "Profil",
      login: "Anmelden",
    },
    es: {
      profile: "Perfil",
      login: "Iniciar sesión",
    },
    sv: {
      profile: "Profil",
      login: "Logga in",
    },
    pt: {
      profile: "Perfil",
      login: "Entrar",
    },
    fi: {
      profile: "Profiili",
      login: "Kirjaudu sisään",
    },
    pl: {
      profile: "Profil",
      login: "Zaloguj się",
    },
    hu: {
      profile: "Profil",
      login: "Bejelentkezés",
    },
    th: {
      profile: "โปรไฟล์",
      login: "เข้าสู่ระบบ",
    },
    ms: {
      profile: "Profil",
      login: "Log masuk",
    },
    vi: {
      profile: "Hồ sơ",
      login: "Đăng nhập",
    },
  },
});

const localePath = useLocalePath();

const user = useSupabaseUser();
</script>

<template>
  <div class="userLogin">
    <div v-if="user" class="userLogin__userLogged">
      <nuxt-link
        :to="localePath('/profile')"
        class="userLogin__profileLink"
        role="button"
        aria-labelledby="userLogin__profileButton"
      >
        <span class="sr-only" id="userLogin__profileButton" :lang="locale">
          {{ t("profile") }}
        </span>
        <nuxt-img
          :src="user?.user_metadata.avatar_url"
          :alt="user.user_metadata.user_name"
          width="27"
          height="27"
          referrerpolicy="no-referrer"
          class="userLogin__userAvatar"
          tabindex="-1"
        />
        {{ user.user_metadata.user_name }}
      </nuxt-link>
    </div>
    <nuxt-link
      v-else
      :to="localePath('/login')"
      class="userLogin__loginButton scssecoBtn"
      role="button"
      aria-label="Login"
    >
      {{ t("login") }}
    </nuxt-link>
  </div>
</template>

<style lang="scss">
@layer nuxtComponents {
  .userLogin {
    &__userLogged,
    &__profileLink {
      align-items: center;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      gap: 0.3rem;
    }
    &__userAvatar {
      border: 2px solid var(--clr-white);
      border-radius: 50%;
    }
    &__profileLink {
      color: var(--clr-white);
    }
  }
}
</style>
