/**
 * Get the thumbnail of the attachment.
 *
 * @param  {Object} attachment
 * @return {String}
 */
export function getAttachmentThumbnail(attachment) {
	if (attachment.type === 'image' && attachment.sizes) {
		return (attachment.sizes.thumbnail || attachment.sizes.full).url;
	}

	return '';
}
