---
title: Setup
mode: minimal
---

<div class="app-body">
	<div class="app-setup app-setup-top">
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

					{% include content/include-import.html %}

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
			<a ng-if="(import_repo)" ng-click="showroute('setup-team')" class="btn btn-success">Continue <i data-icon="right-open-mini" class="icon-end"></i></a>
		</div>
	</div>
</div>
