import React from 'react';
import { Disclosure } from '@headlessui/react'
import './Verbs.css';


function Verbs(props) {
  return (
    <Disclosure>
          <Disclosure.Button className="Dropdown">
            {props.title}
          </Disclosure.Button>
          <Disclosure.Panel className="Panel">
            <ul>
            {props.verbs.map(x => {
                return (
                    <li>{x}</li>
                );
            })}
            </ul>
          </Disclosure.Panel>
    </Disclosure>
  )
}

export default Verbs;