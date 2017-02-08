function importAll(r) {
	r.keys().forEach(r);
}

importAll(require.context('./lib', true, /\.js$/));
importAll(require.context('./containers', true, /\.js$/));
importAll(require.context('./fields', true, /\.js$/));
importAll(require.context('./sidebars', true, /\.js$/));
importAll(require.context('./', true, /store\.js$/));
