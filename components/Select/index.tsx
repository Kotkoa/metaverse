import React, { useState } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import Selector from '../../public/svg/Explore/selector.svg'

export default function Select({ values, icon }: { values: { id: number; name: string }[]; icon: React.ReactNode }) {
  const [selectedValue, setSelectedValue] = useState(values[0])

  return (
    <div className="text-xs">
      <Listbox as="div" value={selectedValue} onChange={setSelectedValue} className="relative w-full min-w-max">
        <ListboxButton className="relative flex items-center py-1 pl-5 pr-10">
          {icon}
          <span className=" ml-2.5 truncate ">{selectedValue.name}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
            <Selector />
          </span>
        </ListboxButton>
        <ListboxOptions className="absolute pl-12 mt-5 z-50">
          {values.map((item) => (
            <ListboxOption key={item.id} value={item} className="mb-2 cursor-pointer">
              {item.name}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  )
}
