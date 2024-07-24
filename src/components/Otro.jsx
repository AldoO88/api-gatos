import { useCatimage } from '../hooks/useCatImage'
export const Otro = () => {
  const { imageUrl } = useCatimage({ fact: 'hola' })
  return (
    <>
      {imageUrl && <img src={imageUrl} alt='' />}
    </>
  )
}
