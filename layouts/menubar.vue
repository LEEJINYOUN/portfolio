<template>
  <header class="bg-white">
    <nav class="flex justify-between items-center w-[92%] mx-auto">
      <div>
        <a class="hover:text-gray-500" href="/">Jin Young</a>
      </div>
      <div
        class="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5"
      >
        <ul
          class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8"
        >
          <li>
            <a class="hover:text-gray-500" href="/">Home</a>
          </li>
          <li>
            <a class="hover:text-gray-500" href="/resume">Resume</a>
          </li>
          <li>
            <a class="hover:text-gray-500" href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a class="hover:text-gray-500" href="/contact">Contact</a>
          </li>
        </ul>
        <!-- <ion-icon
          onclick="onToggleMenu(this)"
          name="menu"
          class="text-3xl cursor-pointer md:hidden"
        ></ion-icon> -->
      </div>
    </nav>
  </header>
  <slot />
</template>
