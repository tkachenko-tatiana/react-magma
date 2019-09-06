import React from 'react'
import './styles.css'
import { AsteriskIcon, magma } from 'react-magma-dom'

export const SimplePropsTable = ({ props }) => {
  if (props === undefined) {
    return null
  }

  const hasDescription = Object.keys(props).some(name => {
    return Boolean(props[name].description)
  })

  return (
    <div>
      <div className="legend">
        <AsteriskIcon size="12" color={magma.colors.foundation02} /> = required
        prop
      </div>
      <table className="props-table" cellSpacing="0" cellPadding="0">
        <thead
          style={{
            textAlign: 'left',
          }}
        >
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Default</th>
            {hasDescription && <th>Description</th>}
          </tr>
        </thead>
        <tbody>
          {props &&
            Object.keys(props).map(name => {
              const prop = props[name]

              if (!prop.type.name) {
                return null
              }

              return (
                <tr key={name}>
                  <td>
                    <span className="prop-name">
                      {name}
                      {prop.required && (
                        <span aria-label="Required" className="required">
                          <AsteriskIcon
                            size="12"
                            color={magma.colors.foundation02}
                          />
                        </span>
                      )}
                    </span>
                  </td>
                  <td>
                    {prop.type.name === 'enum'
                      ? 'enum, one of:'
                      : prop.type.name}
                    <br />
                    {prop.type.options &&
                      Object.keys(prop.type.options).map(i => {
                        return (
                          <div key={i}>
                            <code>{prop.type.options[i]}</code>
                            <br />
                          </div>
                        )
                      })}
                  </td>
                  {!prop.defaultValue ? (
                    <td>
                      <em>-</em>
                    </td>
                  ) : (
                    <td>
                      {prop.defaultValue === "''" ? (
                        <em>[Empty String]</em>
                      ) : (
                        prop.defaultValue.replace(/'/g, '')
                      )}
                    </td>
                  )}
                  {hasDescription && (
                    <td>{prop.description && prop.description}</td>
                  )}
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}