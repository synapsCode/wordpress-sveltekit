import adapter from '@sveltejs/adapter-node';
import azure from '@sveltejs/adapter-azure-static-web-apps';

const config = { kit: { 
    adapter: azure()
 } };

export default config;
