import { S3BackendProps } from "cdktf";

export interface BackendConfiguration {
}

export interface SlackConfiguration {
}

export interface PagerDutyConfiguration {
}

export interface GithubConfiguration {
    token: string,
    organization: string
}

export interface AccessAsCodeConfiguration {
    backend: S3BackendProps,
    slack?: SlackConfiguration,
    pagerDuty?: PagerDutyConfiguration,
    github?: GithubConfiguration
}