/**
 *  路由配置
 */
export interface IRoute {
  path: string
  element: JSX.Element
  children?: IRoute[]
}
