/**
 * Avatar component based on DaisyUI
 *
 * @component
 * @example
 * // Basic avatar
 * <Avatar src="/path/to/image.jpg" alt="User name" />
 *
 * @example
 * // Avatar with online status
 * <Avatar src="/path/to/image.jpg" alt="User name" status="online" />
 *
 * @example
 * // Placeholder avatar with initials
 * <Avatar placeholder="JD" />
 */

type PresenceStatus = 'online' | 'offline';
type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type AvatarShape = 'circle' | 'rounded' | 'square';

interface AvatarProps {
	/** Image source URL */
	src?: string;
	/** Alt text for the image */
	alt?: string;
	/** Predefined size of the avatar */
	size?: AvatarSize;
	/** Shape of the avatar */
	shape?: AvatarShape;
	/** Online/offline presence indicator */
	status?: PresenceStatus;
	/** Text to display when in placeholder mode (e.g., initials) */
	placeholder?: string;
	/** Whether to show a ring around the avatar */
	ring?: boolean;
	/** Tailwind ring color class */
	ringColor?: string;
	/** Additional CSS classes */
	className?: string;
}

/**
 * Avatar component for displaying user profile images or placeholders
 *
 * @param props - Component props
 * @returns Avatar component
 */
const Avatar = ({
					src = "https://placehold.co/64x64?text=DB",
					alt = 'Avatar',
					size = 'md',
					shape = 'circle',
					status,
					placeholder,
					ring = false,
					ringColor = 'ring-primary',
					className = ''
				}: AvatarProps) => {
	// Size mapping
	const sizeClasses = {
		xs: 'w-8',
		sm: 'w-12',
		md: 'w-16',
		lg: 'w-24',
		xl: 'w-32'
	};

	// Shape mapping
	const shapeClasses = {
		circle: 'rounded-full',
		rounded: 'rounded-xl',
		square: 'rounded'
	};

	// Placeholder text size mapping
	const textSizeClasses = {
		xs: 'text-xs',
		sm: 'text-sm',
		md: 'text-base',
		lg: 'text-xl',
		xl: 'text-3xl'
	};

	// Build avatar container classes
	const avatarClasses = [
		'avatar',
		status === 'online' && 'avatar-online',
		status === 'offline' && 'avatar-offline',
		placeholder && 'avatar-placeholder',
		className
	].filter(Boolean).join(' ');

	// Build inner div classes
	const innerClasses = [
		sizeClasses[size],
		shapeClasses[shape],
		ring && `ring-2 ${ringColor} ring-offset-base-100 ring-offset-2`,
		placeholder && 'bg-neutral text-neutral-content',
		!placeholder && 'bg-base-300'
	].filter(Boolean).join(' ');

	return (
		<div className={avatarClasses}>
			<div className={innerClasses}>
				{placeholder ? (<span className={textSizeClasses[size]}>{placeholder}</span>) : (
					<img src={src} alt={alt}/>)}
			</div>
		</div>
	);
};

export default Avatar;