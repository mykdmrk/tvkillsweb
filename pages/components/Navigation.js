import React from 'react'

export default function Navigation() {
	const goToGallery = () => {
		const element = document.getElementById('gallery')
		console.log(element)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	const goToRoadmap = () => {
		const element = document.getElementById('roadmap')
		console.log(element)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	const goToTeam = () => {
		const element = document.getElementById('team')
		console.log(element)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	const goToFaq = () => {
		const element = document.getElementById('faq')
		console.log(element)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}
	return (
		<Navbar className="bg-transparent text-white overflow-x-hidden">
			<NavbarBrand>
				{/* add logo */}

				{/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-9 h-9 bg-white rounded-full"
                >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg> */}
			</NavbarBrand>
			<NavbarToggler className="border-none" />
			<NavbarCollapse>
				<NavbarNav orientation="end">
					<NavbarItem className="">
						<NavbarLink>
							<span onClick={goToGallery}>Gallery</span>
						</NavbarLink>
					</NavbarItem>
					<NavbarItem>
						<NavbarLink className="">
							<span onClick={goToRoadmap}>Roadmap</span>
						</NavbarLink>
					</NavbarItem>
					<NavbarItem>
						<NavbarLink className="">
							<span onClick={goToTeam}>Team</span>
						</NavbarLink>
					</NavbarItem>
					<NavbarItem>
						<NavbarLink className="">
							<span onClick={goToFaq}>FAQ</span>
						</NavbarLink>
					</NavbarItem>
				</NavbarNav>
			</NavbarCollapse>
		</Navbar>
	)
}

/* Navbar logic */

const style = {
	navbar: `px-4 py-2 w-full lg:flex lg:flex-row lg:items-center lg:justify-start lg:relative`,
	brand: `cursor-pointer font-bold inline-block mr-4 py-1.5 text-2xl whitespace-nowrap hover:text-gray-200`,
	toggler: `block float-right text-4xl lg:hidden focus:outline-none focus:shadow`,
	item: `whitespace-pre cursor-pointer px-4 py-3 hover:text-pink-700 hover:underline hover:underline-offset-8 hover:decoration-4`,
	collapse: {
		default: `block left-0 mt-2 shadow py-2 text-center lg:border-none lg:flex lg:flex-grow lg:items-center lg:mt-0 lg:py-0 lg:relative lg:shadow-none`,
		open: `block h-auto visible transition-all duration-300 ease-out w-full opacity-100 lg:transition-none`,
		close: `absolute h-auto invisible w-0 transition-all duration-300 ease-in lg:opacity-100 lg:transition-none lg:visible`,
	},
	nav: {
		end: `block pl-0 mb-0 ml-auto lg:flex lg:pl-0 lg:mb-0`,
	},
}

const Context = React.createContext({})

const Navbar = ({ children, className }) => {
	const [open, setOpen] = React.useState(false)
	const navbarRef = React.useRef(null)

	const toggle = React.useCallback(() => {
		setOpen((prevState) => !prevState)
	}, [])

	// close navbar on click outside when viewport is less than 1024px
	React.useEffect(() => {
		const handleOutsideClick = (event) => {
			if (window.innerWidth < 1024) {
				if (!navbarRef.current?.contains(event.target)) {
					if (!open) return
					setOpen(false)
				}
			}
		}
		window.addEventListener('click', handleOutsideClick)
		return () => window.removeEventListener('click', handleOutsideClick)
	}, [open, navbarRef])

	return (
		<Context.Provider value={{ open, toggle }}>
			<nav ref={navbarRef} className={`${className} ${style.navbar}`}>
				{children}
			</nav>
		</Context.Provider>
	)
}

const useToggle = () => React.useContext(Context)

const NavbarBrand = ({ children, href }) => (
	<a href={href} className={style.brand}>
		<strong>{children}</strong>
	</a>
)

const NavbarToggler = () => {
	const { toggle } = useToggle()
	return (
		<button
			type="button"
			aria-expanded="false"
			aria-label="Toggle navigation"
			className={style.toggler}
			onClick={toggle}
		>
			&#8801;
		</button>
	)
}

const NavbarCollapse = ({ children }) => {
	const { open } = useToggle()
	return (
		<div
			style={{ backgroundColor: 'inherit' }}
			className={`${style.collapse.default}
        ${open ? style.collapse.open : style.collapse.close}`}
		>
			{children}
		</div>
	)
}

const NavbarNav = ({ children, orientation }) => (
	<ul className={style.nav[orientation]}>{children}</ul>
)

const NavbarItem = ({ children }) => <li className={style.item}>{children}</li>
const NavbarLink = ({ children, href, active, activeClass }) => (
	<a href={href} className={active ? activeClass : ''}>
		{children}
	</a>
)
