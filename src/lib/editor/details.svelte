<script lang="ts">
  import { Input } from "@haze-ui/svelte";
  import { data } from "$lib/state/index.svelte";
</script>

<div
  class="grid-(~ cols-2 gap5)"
>
  <strong class="frow">
    <i class="i-majesticons:user-line"></i> Personal Details
  </strong>

  <label for="name" class="col-span-2">Name</label>

  <input
    id="name"
    type="text"
    bind:value={data.details.name}
    placeholder="Enter your name"
    class="col-span-2 input"
  />

  <label for="about" class="col-span-2">About</label>

  <input
    id="about"
    type="text"
    placeholder="about"
    bind:value={data.details.about}
    class="col-span-2 input"
  />

  
  <label for="about" class="col-span-2">Role</label>

  <input
    id="role"
    type="text"
    placeholder="about"
    bind:value={data.details.role}
    class="col-span-2 input"
  />

  <label for="email">Email</label>
  <label for="phone">Phone Number</label>

  <Input
    id="email"
    type="email"
    placeholder="Enter your email"
    iconL="i-line-md:email"
    bind:value={data.details.email}
  />
  <Input
    id="phone"
    type="text"
    placeholder="Enter phone number"
    iconL="i-line-md:phone"
    bind:value={data.details.phone}
  />

  <label for="location" >Location</label>
  <label for="website" >Website</label>
  <Input
    id="location"
    iconL="i-tdesign:location-filled"
    type="text"
    placeholder="Enter location"
  />

  <Input
    id="website"
    type="url"
    placeholder="Enter website"
    iconL='i-lucide:globe'
  />

    <label for="email">Email</label>
  <label for="phone">Linkedin</label>

  <Input
    id="github"
    placeholder="Enter github url"
    iconL="i-mdi:github"
    bind:value={data.details.github}
  />
  <Input
    id="linkedin"
    type="text"
    placeholder="Enter linkedin url"
    iconL="i-mdi:linkedin"
    bind:value={data.details.linkedin}
  />
</div>
