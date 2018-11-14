/**
 * Base definition of empty meta
 */
const emptyMeta = {
	alt: null,
	caption: null,
	date: null,
	default_thumb_url: null,
	edit_nonce: null,
	file_ext: null,
	file_name: null,
	file_type: null,
	file_url: null,
	filesize: null,
	filetype: {
		ext: null,
		type: null
	},
	height: null,
	width: null,
	thumb_url: null,
	title: null
};

/**
 * Returns the empty meta object
 *
 * @return {Object}
 */
export const getEmptyFileMeta = () => emptyMeta;

/**
 * Setups the meta from a file object
 *
 * @param  {Object} data
 * @return {Object}
 */
export const setupMetaFromFile = ( data = {} ) => {
	if ( ! data.id ) {
		return emptyMeta;
	}

	return {
		...emptyMeta,
		alt: data.alt,
		caption: data.caption,
		date: data.dateFormatted,
		default_thumb_url: data.icon,
		edit_nonce: data.nonces.update,
		file_ext: data.subtype,
		file_name: data.filename,
		file_type: data.type,
		file_url: data.url,
		filesize: data.filesizeHumanReadable,
		filetype: {
			ext: data.subtype,
			type: data.mime
		},
		height: data.sizes.full.height,
		width: data.sizes.full.width,
		thumb_url: data.sizes.thumbnail.url,
		title: data.title
	};
};
