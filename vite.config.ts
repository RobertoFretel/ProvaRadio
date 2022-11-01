import { sveltekit } from '@sveltejs/kit/vite';
import { Server } from "socket.io"
import { readdirSync } from "fs"
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [
		sveltekit()
	],
	server: {
		host: true
	}
};

export default config;
