<template>
    <z-container>
      <z-breadcrumbs :items="[{ name: 'Home', link: { name: 'home' }}, { name: 'Layout' }, { name: 'Navbar', link: { name: 'docsNavbar' }}]" />
      <h4>Navbar</h4>

      <p>Navbar is a layout container that appears in the header of apps and websites.</p>

      <p>
        Components: <code>&lt;z-navbar&gt;</code>, <code>&lt;z-navbar-section&gt;</code>
      </p>

      <z-divider content="EXAMPLE" />
      <br>

      <z-navbar>
        <z-navbar-section>
          <z-link href="">Home</z-link> &nbsp; <z-link href="">About</z-link> &nbsp; <z-link href="">Contact</z-link>
        </z-navbar-section>
        <z-navbar-section center>
          <z-link :link="{ name: 'home'}">ZUTRE</z-link>
        </z-navbar-section>
        <z-navbar-section>
          <z-button size="sm"><z-icon name="account_circle" /> Log In</z-button> &nbsp; <z-button size="sm" type="primary"><z-icon name="how_to_reg" /> Sign Up</z-button>
        </z-navbar-section>
      </z-navbar>

<z-code lang="Vue">
&lt;z-navbar&gt;
  &lt;z-navbar-section&gt;
    &lt;z-link href=""&gt;Home&lt;/z-link&gt;
    &lt;z-link href=""&gt;About&lt;/z-link&gt;
    &lt;z-link href=""&gt;Contact&lt;/z-link&gt;
  &lt;/z-navbar-section&gt;

  &lt;z-navbar-section center&gt;
    &lt;z-link :link="{ name: 'home'}"&gt;ZUTRE&lt;/z-link&gt;
  &lt;/z-navbar-section&gt;

  &lt;z-navbar-section&gt;
    &lt;z-button size="sm"&gt;
      &lt;-icon name="account_circle"/&gt; Log In
    &lt;/z-button&gt;
    &lt;z-button size="sm" type="primary"&gt;
      &lt;z-icon name="how_to_reg" /&gt; Sign Up
    &lt;/z-button&gt;
  &lt;/z-navbar-section&gt;
&lt;/z-navbar&gt;
</z-code>

      <z-divider content="API" />
      <h4>API</h4>

      <h5>NavbarSection <code>&lt;z-navbar-section /&gt;</code></h5>
      <z-table scrollable shrink>
        <z-thead>
          <z-th>Name</z-th>
          <z-th>Description</z-th>
          <z-th>Type</z-th>
          <z-th>Values</z-th>
          <z-th>Default</z-th>
        </z-thead>
        <z-tbody>
          <z-tr>
            <z-td><code>center</code></z-td>
            <z-td>
              set <code>true</code> to have centered section
            </z-td>
            <z-td>Boolean</z-td>
            <z-td><code>true</code>/<code>false</code></z-td>
            <z-td><code>false</code></z-td>
          </z-tr>
        </z-tbody>
      </z-table>

    </z-container>
</template>
<script>
export default {
  name: 'DocsNavbar',
}
</script>
