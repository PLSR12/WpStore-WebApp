import { Breadcrumb } from 'antd'
import { Params, useMatches } from 'react-router-dom'

type matchTypes = {
  id: string
  pathname: string
  params: Params<string>
  data: unknown
  handle: any
}

export default function Breadcrumbs() {
  const matches: Array<matchTypes> = useMatches()

  const crumbs = matches
    .filter((match: any) => {
      if (match.handle && match.handle.crumb) {
        return true
      }

      return false
    })
    .map((match: any) => {
      if (match.handle && match.handle.crumb) {
        return match.handle.crumb()
      }
    })

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {crumbs.map((crumb, index) => (
        <Breadcrumb.Item key={index}>{crumb}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  )
}
