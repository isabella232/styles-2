---
title: Setup
mode: minimal
---

<div class="app-body">
	<div class="app-setup">
		<div class="app-setup-content">
			<div class="app-setup-body">
				<div ng-hide="(has_github || has_bitbucket)">
					<div class="text-center">
						<h1 class="h0">Start Your Sinter Account</h1>
						<p class="text-large meta">Sinter is a hosted ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Get started by connecting your Github or Bitbucket account.</p>
						<a ng-click="has_github=true;" class="btn btn-github btn-lg"><i data-icon="github"></i> Github Sign In</a>
						<a ng-click="has_github=true;" class="btn btn-bitbucket btn-lg"><i data-icon="bitbucket"></i> Bitbucket Sign In</a>
						<a ng-click="has_github=true;" class="btn btn-email btn-lg"><i data-icon="mail"></i> Email Sign Up</a>
					</div>
				</div>
				<div ng-show="(has_github || has_bitbucket)">
					<div class="section-label">
						<h1>
							Import a Project
							<small>Choose an account from Github  or Bitbucket. Then choose a repository to import.</small>
						</h1>
					</div>
					<div class="flex app-flex">
						<div class="section flex-item flex-1 section-max-large">
							<div class="section-tabs section-tabs-header">
								<ul>
									<li><a ng-class="{'active':(import_mode=='github')}" ng-click="import_mode='github'; import_account=false">Github</a></li>
									<li><a ng-class="{'active':(import_mode=='bitbucket')}" ng-click="import_mode='bitbucket'; import_account=false">Bitbucket</a></li>
								</ul>
							</div>
							<!-- GIT -->
							<div class="section-filter" ng-show="(import_mode=='github'&&has_github)">
								<input type="search" class="form-control input-pill input-sm" placeholder="filter github accounts..." />
							</div>
							<div class="section-list flex-scroll" ng-show="(import_mode=='github'&&has_github&&github_accounts.length)">
								<ul><li ng-repeat="x in github_accounts"><a ng-click="$parent.import_account=x" ng-class="{'active':(import_account==x)}">[[x]]</a></li></ul>
							</div>
							<div class="section-empty" ng-show="(import_mode=='github'&&!has_github)">
								<div class="text-center"><a ng-click="has_github=true" class="btn btn-default">Sign in with Github</a></div>
							</div>
							<!-- /GIT -->
							<!-- BIT -->
							<div class="section-filter" ng-show="(import_mode=='bitbucket'&&has_bitbucket)">
								<input type="search" class="form-control input-pill input-sm" placeholder="filter bitbucket accounts..." />
							</div>
							<div class="section-list flex-scroll" ng-show="(import_mode=='bitbucket'&&has_bitbucket&&bitbucket_accounts.length)">
								<ul><li ng-repeat="x in bitbucket_accounts"><a ng-click="$parent.import_account=x" ng-class="{'active':(import_account==x)}">[[x]]</a></li></ul>
							</div>
							<div class="section-empty" ng-show="(import_mode=='bitbucket'&&!has_bitbucket)">
								<div class="text-center"><a  ng-click="has_bitbucket=true" class="btn btn-default">Sign in with Bitbucket</a></div>
							</div>
							<!-- /BIT -->
						</div>
						<div ng-class="{'section flex-item flex-2 section-max-large':true,'section-empty':(!import_account)}"  ng-if="(import_account)">
							<!-- GIT -->
							<div class="section-header" ng-show="(import_mode=='github'&&import_account)">
								<div class="header"><div class="header-title"><h4>Github Repositories for [[import_account]]</h4></div></div>
							</div>
							<div class="section-filter" ng-show="(import_mode=='github'&&import_account)">
								<input type="search" class="form-control input-pill input-sm" placeholder="filter accounts..." />
							</div>
							<div class="section-list flex-scroll" ng-show="(import_mode=='github'&&import_account)">
								<ul><li ng-repeat="x in github_repos"><a ng-click="selectrepo(x);" ng-class="{'active':(import_repo==x)}">[[x]]</a></li></ul>
							</div>
							<!-- /GIT -->
							<!-- BIT -->
							<div class="section-header" ng-show="(import_mode=='bitbucket'&&import_account)">
								<div class="header"><div class="header-title"><h4>Bitbucket Repositories for [[import_account]]</h4></div></div>
							</div>
							<div class="section-filter" ng-show="(import_mode=='bitbucket'&&import_account)">
								<input type="search" class="form-control input-pill input-sm" placeholder="filter repositories..." />
							</div>
							<div class="section-list flex-scroll" ng-show="(import_mode=='bitbucket'&&import_account)">
								<ul><li ng-repeat="x in bitbucket_repos"><a ng-click="$parent.import_repo=x" ng-class="{'active':(import_repo==x)}">[[x]]</a></li></ul>
							</div>
							<!-- /BIT -->
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="app-header">
	<div class="header">
		<div class="header-title">
			<h2>Account Setup</h2>
		</div>
		<div class="header-actions">
			<a class="btn btn-link meta">Go Back</a>
			<a ng-if="(import_repo)" ng-click="showroute('setup-team')" class="btn btn-success">Continue</a>
		</div>
	</div>
</div>
