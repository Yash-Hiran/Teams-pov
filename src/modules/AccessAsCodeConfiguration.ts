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
    backend: BackendConfiguration;
    slack: SlackConfiguration;
    pagerDuty: PagerDutyConfiguration,
    github: GithubConfiguration
}
