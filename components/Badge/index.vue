<script setup lang="ts"></script>

<template>
  <span class="scssecoBadge">
    <slot></slot>
  </span>
</template>

<style lang="scss">
@layer nuxtComponents {
  .scssecoBadge {
    --badge-padding-x: 0.5em;
    --badge-padding-y: 0.25em;
    --badge-font-size: 0.75em;
    --badge-font-weight: 700;
    --badge-background: var(--clr-brandSecondaryColor);
    --badge-color: var(--clr-black);
    --badge-border-radius: var(--borderRadius);

    display: inline-block;
    margin-inline-start: 0.25rem;
    padding: var(--badge-padding-x) var(--badge-padding-y);

    font-size: var(--badge-font-size);
    font-weight: bold;
    line-height: 1;
    text-align: center;
    text-indent: 0;
    vertical-align: baseline;
    white-space: nowrap;

    background-color: var(--badge-background);
    border-radius: var(--badge-border-radius);
    color: var(--badge-color);

    &:empty {
      display: none;
    }
  }

  .scssecoBtn {
    .scssecoBadge {
      position: relative;
      top: -1px;
    }
    &:hover,
    &:focus {
      .scssecoBadge {
        background-color: var(--clr-brandPrimaryColor);
        color: var(--clr-white);
      }
    }
  }
}
</style>
