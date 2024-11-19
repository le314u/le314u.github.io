import React, { useEffect, useState } from 'react';
import {Button} from '../button'
import styles from './index.module.css'

export function NavBar(){
	const [scroll, setScroll] = useState(window.scrollY);

	useEffect(() => {
		const navbar = document.getElementsByTagName("nav")[0];
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			if (scroll < currentScrollPos) {
				navbar.style.top = "-50px";
			} else {
				navbar.style.top = "0";
			}
			setScroll(currentScrollPos);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scroll]);

	return (
		<nav className={styles.navBar}>
				<ul>
						<li><Button path="#cards" text="Selection Card"/></li>
						<li><Button path="#tricks" text="Tricks"/></li>
						<li><Button path="#win" text="Win"/></li>
						<li><Button path="https://www.moxfield.com/decks/v00Bw4xtZUGlqu60IcdKXw" text="MoxField"/></li>
				</ul>
		</nav>
		)
}

function showBar(){// Obtenha a barra de navegação
		const navbar = document.getElementsByTagName("nav")[0];
		navbar.style.position="fixed"
		// Obtenha a posição atual de rolagem vertical da janela
		let prevScrollPos = window.scrollY;

		// Defina um evento de rolagem para a janela
		window.onscroll = function() {
				// Obtenha a posição atual de rolagem vertical da janela
				const currentScrollPos = window.scrollY;    
		
				// Verifique se a posição atual é maior que a anterior (rolagem para baixo)
				if (prevScrollPos < currentScrollPos) {
						// Esconda a barra de navegação movendo-a acima do topo da janela
						navbar.style.top = "-50px";
				} else {
						// Exiba a barra de navegação movendo-a de volta para a posição normal
						navbar.style.top = "0";
				}
		
				// Atualize a posição anterior de rolagem
				prevScrollPos = currentScrollPos;
		}
}