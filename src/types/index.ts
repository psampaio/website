import type {Entry} from "@keystatic/core/reader"
import keystaticConfig from "../../keystatic.config";

export type ProjectProps = Entry<(typeof keystaticConfig)['collections']['projects']>
export type ExperienceProps = Entry<(typeof keystaticConfig)['collections']['experience']>
export type PostProps = Entry<(typeof keystaticConfig)['collections']['posts']>
export type NavLinksProps = Entry<(typeof keystaticConfig)['collections']['navLinks']>
export type SocialLinksProps = Entry<(typeof keystaticConfig)['collections']['socialLinks']>
export type HeroInfoProps = Entry<(typeof keystaticConfig)['singletons']['heroInfo']>
export type OwnerInfoProps = Entry<(typeof keystaticConfig)['singletons']['ownerInfo']>
export type SiteInfoProps = Entry<(typeof keystaticConfig)['singletons']['siteInfo']>