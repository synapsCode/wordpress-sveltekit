import adapter from '@sveltejs/adapter-node';
import azure from 'svelte-adapter-azure-swa';

const config = { kit: { 
    adapter: azure()
 } };

export default config;
