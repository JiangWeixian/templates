import { BASE } from '@/constants/project.constants'
import { extname, basename } from 'path'
import isObject from 'lodash/isObject'
import isString from 'lodash/isString'
import FolderGenerator, { Folder } from './folder'

export const createRouterUrl = (url: string) => {
  return `${BASE}${url}/`
}

type Routes = { [key: string]: string[] }

class RouterGenerator extends FolderGenerator {
  routes: Routes = {}
  /**
   * just remove abs folder path
   */
  private abs2rel = (path: string, absPath: string = this.folderPath): string => {
    return path.replace(absPath, '')
  }
  protected hasChildRoutes = (routes: any): boolean => {
    return isObject(routes)
  }
  protected isRoute = (fileName: string): boolean => {
    return extname(fileName).toLowerCase() === '.md'
  }
  protected isIndexRoute = (fileName: string): boolean => {
    return this.isRoute(fileName) && basename(fileName).toLowerCase() === 'readme.md'
  }
  protected getNormalRoute = (route: string) => {
    return route.replace(/(.)\.md/i, (match, a, b) => {
      console.log(match, a, b)
      return match
    })
  }
  protected getIndexRoute = (route: string) => {
    return route.replace(/\/readme\.md/i, '')
  }
  protected getChildRoutes = (folder: Folder, absPath: string): string[] => {
    let childRoutes: string[] = []
    let relPath = ''
    if (isString(folder)) {
      relPath = this.abs2rel(folder, absPath)
      if (this.isIndexRoute(relPath)) {
        childRoutes.push(this.getIndexRoute(relPath))
      } else {
        childRoutes.push(this.getNormalRoute(relPath))
      }
    } else {
      const key = Object.keys(folder)[0]
      const values = folder[key]
      values.forEach(v => {
        childRoutes = childRoutes.concat(this.getChildRoutes(v, absPath))
      })
    }
    return childRoutes
  }
  getRoutes = (): Routes => {
    const folders = this.getFolders()
    const routes: Routes = {}
    folders.forEach(f => {
      const hasChildRoutes = this.hasChildRoutes(f)
      if (!hasChildRoutes) {
        // do nothing
      } else {
        const key = Object.keys(f)[0]
        const firstLevelRoute = this.abs2rel(key)
        routes[firstLevelRoute] = this.getChildRoutes(f, key)
      }
    })
    return routes
  }
}

// export default RouterGenerator

const r = new RouterGenerator()
console.log(r.getRoutes())
