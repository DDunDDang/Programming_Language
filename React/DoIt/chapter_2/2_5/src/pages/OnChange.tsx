import type { ChangeEvent } from "react";

export default function OnChange() {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    console.log('onChangeChecked', e.target.checked)
  }
  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    console.log('onChangeChecked', e.target.checked)
  }
  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    console.log('onChangeFiles', e.target.files)
  }
  // prettir-ignore
  return (
    <div>
      <p>OnChange</p>
      <input type="text" onChange={onChangeValue} placeholder="type some text" defaultValue="Hello" />
      <input type="checkbox" onChange={onChangeChecked} defaultChecked />
      <input type="file" onChange={onChangeFiles} multiple accept="image/*" />
    </div>
  )
}