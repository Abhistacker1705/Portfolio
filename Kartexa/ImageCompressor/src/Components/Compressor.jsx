import React, { useRef, useState } from "react"
import imageCompression from "browser-image-compression"

const Compressor = () => {
	let inputRef = useRef()

	const [originalImage, setOrigImage] = useState("")

	const [originalImageFile, setOriginalImageFile] = useState(
		"https://placeholder.pics/svg/300x150/FFFFFF-000000/FFED2A-FFFFFF/Upload%20Image",
	)

	const [compressedImage, setCompressedImage] = useState("")

	const [fileName, setFileName] = useState("No image uploaded")

	const handle = (e) => {
		const imageFile = e.target.files[0]

		setOrigImage(imageFile)

		setOriginalImageFile(URL.createObjectURL(imageFile))

		setFileName(imageFile.name)
	}

	const handleCompressImage = (e) => {
		e.preventDefault()

		const options = {
			maxSizeMB: 1,

			maxWidthOrHeight: 500,

			useWebWorker: true,
		}

		if (options.maxSizeMB >= originalImage / 1024) {
			alert("Image is too small, cant be compressed")

			return 0
		}

		let output

		imageCompression(originalImage, options).then((image) => {
			output = image

			const downloadLink = URL.createObjectURL(output)

			setCompressedImage(downloadLink)
		})
	}

	return (
		<div className='flex flex-col gap-1 items-center fo bg-[#333333] max-w-screen min-h-[calc(100vh-7rem)]'>
			<h1 className='text-4xl mt-8 text-neutral-200 text font-[poppins] font-bold'>PiCompress</h1>

			<div className='flex flex-col gap-12 p-8 w-2/5 min-h-[12rem]'>
				<img src={originalImageFile} className='w-screen h-fit' />
				<input
					ref={inputRef}
					onChange={(e) => {
						handle(e)
					}}
					hidden='hide'
					className=' w-screen h-6 border-none border-r-24'
					accept='/images'
					type='file'
				/>

				<div className='flex flex-row'>
					<button
						className='p-2 w-48 self-center text-neutral-200 bg-blue-700 border-none rounded-3xl cursor-pointer hover:bg-blue-400'
						onClick={() => {
							inputRef.current.click()
						}}
					>
						<i className='fa-solid fa-image'></i> Browse Image
					</button>
					<div className='text-neutral-200 self-center'>{fileName}</div>
				</div>
				<button
					onClick={handleCompressImage}
					className='p-2 w-48 self-center
					text-neutral-200 bg-blue-700 
					border-none rounded-3xl cursor-pointer
			    	 hover:bg-blue-400'
				>
					Compress <i className='fa-solid fa-file-zipper'></i>
				</button>
			</div>
			{compressedImage && (
				<div id='DownloadSection' className='flex flex-col gap-12 p-8 w-2/5 min-h-[12rem]'>
					<img src={compressedImage} className='w-screen h-fit' />
					<button
						className='p-2 w-48 self-center
					text-neutral-200 bg-blue-700 
					border-none rounded-3xl cursor-pointer
			    	 hover:bg-blue-400'
					>
						<a href={compressedImage} download={fileName}>
							Download <i className='fa-solid fa-download'></i>
						</a>
					</button>
				</div>
			)}
		</div>
	)
}

export default Compressor
