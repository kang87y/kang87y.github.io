<script lang="ts">
	let rgb = { r: 255, g: 255, b: 255 };
	let hex = rgbToHex(rgb);

	function rgbToHex({ r, g, b }: { r: number; g: number; b: number }) {
		return (
			'#' +
			[r, g, b]
				.map((x) => x.toString(16).padStart(2, '0'))
				.join('')
				.toUpperCase()
		);
	}

	const hexToRgb = (hex: string) => {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result
			? {
					r: parseInt(result[1], 16),
					g: parseInt(result[2], 16),
					b: parseInt(result[3], 16)
				}
			: { r: 255, g: 255, b: 255 };
	};

	const handleRgbChange = () => {
		hex = rgbToHex(rgb);
	};

	const handleHexChange = () => {
		if (/^#([0-9A-Fa-f]{6})$/.test(hex)) {
			rgb = hexToRgb(hex);
		}
	};
</script>

<main>
	<div class="card">
		<h1>RGB ↔ HEX Color Converter</h1>

		<div class="color-preview" style="background-color: {hex};" aria-label="Color Preview"></div>

		<div class="input-group">
			<label>
				색상 선택기:
				<input type="color" bind:value={hex} on:input={handleHexChange} />
			</label>

			<label>
				RGB:
				<div style="display: flex; gap: 10px;">
					<input
						type="number"
						min="0"
						max="255"
						bind:value={rgb.r}
						on:input={handleRgbChange}
						placeholder="R"
					/>
					<input
						type="number"
						min="0"
						max="255"
						bind:value={rgb.g}
						on:input={handleRgbChange}
						placeholder="G"
					/>
					<input
						type="number"
						min="0"
						max="255"
						bind:value={rgb.b}
						on:input={handleRgbChange}
						placeholder="B"
					/>
				</div>
			</label>

			<label>
				HEX:
				<input
					type="text"
					bind:value={hex}
					on:input={handleHexChange}
					maxlength="7"
					placeholder="#FFFFFF"
				/>
			</label>
		</div>

		<button
			on:click={() => {
				rgb = { r: 255, g: 255, b: 255 };
				hex = rgbToHex(rgb);
			}}
		>
			Reset
		</button>
	</div>

	<div class="contrast-boxes">
		<div class="contrast-box" style="background-color: #FFF; color: {hex};">
			다람쥐 헌 쳇바퀴에 타고파
		</div>
		<div class="contrast-box" style="background-color: #000; color: {hex};">
			다람쥐 헌 쳇바퀴에 타고파
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 20px;
	}

	.card {
		background: #fff;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		padding: 20px;
		max-width: 400px;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	h1 {
		font-size: 1.5rem;
		text-align: center;
		color: #333;
	}

	.color-preview {
		width: 100%;
		height: 100px;
		border-radius: 8px;
		border: 1px solid #ddd;
	}

	.input-group {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	label {
		font-weight: bold;
		color: #555;
	}

	input[type='number'],
	input[type='text'] {
		padding: 10px;
		font-size: 1rem;
		border: 1px solid #ddd;
		border-radius: 4px;
		outline: none;
		transition: border-color 0.2s ease;
	}

	input[type='number']:focus,
	input[type='text']:focus {
		border-color: #0078d7;
	}

	input[type='color'] {
		width: 50px;
		height: 30px;
		border: none;
		cursor: pointer;
	}

	button {
		padding: 10px;
		background-color: var(--brand-color);
		color: #fff;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		text-align: center;
		font-size: 1rem;
		transition: background-color 0.2s ease;
	}

	button:hover {
		background-color: var(--brand-color-dark);
	}

	.contrast-boxes {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 20px;
		margin-top: 200px;
		width: 100%;
	}

	.contrast-box {
		padding: 20px;
		border-radius: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.25rem;
		font-weight: bold;
		text-align: center;
	}
</style>
