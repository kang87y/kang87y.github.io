<script lang="ts">
	import Navbar from '../lib/components/Navbar.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import Project from '../lib/components/Project.svelte';

	import Profile from '../lib/img/profile.png';

	import GithubLogo from '../lib/img/github.svg';
	import DiscordLogo from '../lib/img/discord.svg';
	import EmailLogo from '../lib/img/email.svg';

	import Heart from '../lib/img/heart.svg';
	// import ToonationLogo from '../lib/img/toonation.png';
</script>

<Navbar />
<div class="page">
	<div class="container">
		<div class="content">
			<h1>
				Hi there!<br />
				I'm <span class="highlight">kang87y</span>,<br />
				a Rookie <span class="highlight">Full-Stack</span> Developer.
			</h1>
			<div class="buttons">
				<a href="https://github.com/kang87y" class="icon-link" target="_blank">
					<img src={GithubLogo} alt="github" class="icon" />
					<span class="tooltip">Github</span>
				</a>
				<a href="https://discordapp.com/users/577022814209703936" class="icon-link" target="_blank">
					<img src={DiscordLogo} alt="discord" class="icon" />
					<span class="tooltip">Discord</span>
				</a>
				<a href="mailto:contact@kang87y.com" class="icon-link" target="_blank">
					<img src={EmailLogo} alt="email" class="icon" />
					<span class="tooltip">Email</span>
				</a>
				<!-- <a href="https://toon.at/donate/kang87y"
					><img src={ToonationLogo} alt="toonation" class="icon" /></a
				> -->
			</div>
		</div>
	</div>
	<div class="container" id="about">
		<div class="content">
			<span class="introduce">
				<img src={Profile} alt="profile" class="profile" />
				<p>
					I'm a passionate <span class="highlight">full-stack</span> developer with a strong interest
					in creating user-friendly web applications. My journey in programming began with curiosity
					and quickly grew into a lifelong passion for problem-solving and continuous learning. I believe
					technology has the power to improve lives, and I strive to be a part of that change. Whether
					it's simplifying complex workflows or building interactive user experiences, I thrive on turning
					ideas into reality through code.
				</p>
			</span>
		</div>
	</div>
	<div class="container" id="skills">
		<div class="content">
			<h1>Skills</h1>
			<p>
				Here are some of the
				<span class="highlight">technologies</span> I've worked with.
			</p>
			<div class="tech-stack-container">
				<div class="category">
					<h3>Programming Languages</h3>
					<div class="tech-items">
						<div class="tech-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
								alt="JavaScript"
							/>
							<span>JavaScript</span>
						</div>
						<div class="tech-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
								alt="TypeScript"
							/>
							<span>TypeScript</span>
						</div>
						<div class="tech-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
								alt="Python"
							/>
							<span>Python</span>
						</div>
						<div class="tech-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
								alt="C++"
							/>
							<span>C++</span>
						</div>
						<div class="tech-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
								alt="C#"
							/>
							<span>C#</span>
						</div>
						<div class="tech-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
								alt="Dart"
							/>
							<span>Dart</span>
						</div>
						<div class="tech-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
								alt="Kotlin"
							/>
							<span>Kotlin</span>
						</div>
					</div>
				</div>
				<div class="category">
					<h3>Frontend Frameworks</h3>
					<div class="tech-items">
						<div class="tech-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
								alt="React"
							/>
							<span>React</span>
						</div>
						<div class="tech-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
								alt="Svelte"
							/>
							<span>Svelte</span>
						</div>
						<div class="tech-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg"
								alt="Vite"
							/>
							<span>Vite</span>
						</div>
					</div>
				</div>
				<div class="category">
					<h3>Backend & Databases</h3>
					<div class="tech-items">
						<div class="tech-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
								alt="Node.js"
							/>
							<span>Node.js</span>
						</div>
						<div class="tech-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
								alt="Express.js"
							/>
							<span>Express.js</span>
						</div>
						<div class="tech-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
								alt="MongoDB"
							/>
							<span>MongoDB</span>
						</div>
						<div class="tech-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
								alt="MySQL"
							/>
							<span>MySQL</span>
						</div>
						<div class="tech-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
								alt="PostgreSQL"
							/>
							<span>PostgreSQL</span>
						</div>
					</div>
				</div>
				<div class="category">
					<h3>Tools & Others</h3>
					<div class="tech-items">
						<div class="tech-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
								alt="Docker"
							/>
							<span>Docker</span>
						</div>
						<div class="tech-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
								alt="Git"
							/>
							<span>Git</span>
						</div>
						<div class="tech-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
								alt="GitHub"
							/>
							<span>GitHub</span>
						</div>
						<div class="tech-item">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
								alt="VS Code"
							/>
							<span>VS Code</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container" id="projects">
		<div class="content">
			<h1>Projects</h1>
			<p>
				Here are some of the
				<span class="highlight">projects</span> I've worked on.
			</p>
			<span class="project-list">
				<Project
					title="디스코드 해리포터 봇"
					description="해리포터 소설 기반 디스코드 Text RPG 봇 (Owner)"
					imageUrl="https://via.placeholder.com/300"
					link="https://harrybot.kro.kr"
				/>
			</span>
		</div>
	</div>
	<div class="container" id="donate">
		<div class="content">
			<h1>Donate</h1>
			<p>
				If you like my work and would like to <span class="highlight">support</span> me, you can
				<span class="highlight">donate</span>
				through the following platforms.
			</p>
			<a href="https://ko-fi.com/kang87y" class="donateBtn" target="_blank"
				><img src={Heart} alt="heart" class="inline-svg" />Donate on Ko-fi</a
			>
		</div>
	</div>
</div>
<Footer />

<style>
	.page {
		padding: 200px 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 350px;
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 5rem;
		transition: all 0.3s;
	}

	.content {
		flex: 1;
		color: white;
	}

	h1 {
		font-size: 3rem;
	}

	.highlight {
		color: var(--brand-color);
	}

	p {
		font-size: 1.25rem;
	}

	.profile {
		width: 150px;
		height: 150px;
		margin-right: 50px;
	}

	.buttons {
		margin-top: 50px;
		align-items: center;
		display: flex;
		transition: all 0.3s;
	}

	.buttons img {
		margin-right: 20px;
	}

	.icon-link {
		display: flex;
		align-items: center;
		position: relative;
		text-decoration: none;
	}

	.icon-link:hover .icon {
		transform: scale(1.1);
	}

	.tooltip {
		opacity: 0;
		width: 0;
		overflow: hidden;
		font-size: 20px;
		color: #ffffff;
		transition:
			opacity 0.3s ease,
			width 0.3s ease;
	}

	.icon-link:hover .tooltip {
		opacity: 1;
		width: 100px;
	}

	.buttons a {
		text-decoration: none;
	}

	.icon {
		width: 40px;
		height: 40px;
		transition: transform 0.3s ease;
	}

	.introduce {
		display: flex;
		align-items: center;
		letter-spacing: 0.1rem;
		text-align: justify;
	}

	.donateBtn {
		display: inline-flex;
		background-color: var(--brand-color);
		color: white;
		padding: 10px 15px;
		border-radius: 8px;
		text-decoration: none;
		transition: background-color 0.3s;
	}

	.donateBtn:hover {
		background-color: var(--brand-color-dark);
	}

	.inline-svg {
		width: 20px;
		height: 20px;
		margin-right: 10px;
		vertical-align: middle;
	}

	.tech-stack-container {
		margin-top: 50px;
		width: 100%;
	}

	.category {
		margin-bottom: 30px;
	}

	.category h3 {
		font-size: 20px;
		margin-bottom: 15px;
		color: #ffffff;
		border-left: 4px solid var(--brand-color);
		padding-left: 10px;
	}

	.tech-items {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
	}

	.tech-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		background: var(--background-light);
		padding: 10px;
		border-radius: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		text-align: center;
		width: 120px;
		transition:
			transform 0.3s,
			box-shadow 0.3s;
	}

	.tech-item:hover {
		transform: translateY(-5px);
	}

	.tech-item img {
		width: 50px;
		height: 50px;
		margin-bottom: 10px;
	}

	.tech-item span {
		font-size: 14px;
		color: #ffffff;
	}

	.project-list {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2rem;
		}

		.container {
			padding: 0 1.5rem;
		}

		.profile {
			width: 100px;
			height: 100px;
			margin-right: 25px;
		}

		.introduce {
			flex-direction: column;
			letter-spacing: 0;
		}
	}
</style>
