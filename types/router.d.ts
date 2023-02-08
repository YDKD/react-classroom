/**
 *  路由配置
 */
export interface IRoute {
  path: string
  name?: string
  element: React.LazyExoticComponent<
    React.MemoExoticComponent<() => JSX.Element>
  >
  children?: IRoute[]
}
