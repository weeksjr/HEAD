define(['application', 'lib/api', './views/layout', './views/attention_regions', './css/performances'],
    function(App, api, LayoutView, AttentionRegionsView) {
        return {
            performances: function(dir) {
                if (!this.layoutView || this.layoutView.isDestroyed()) {
                    this.layoutView = new LayoutView({
                        dir: dir,
                        nav: true,
                        disableSaving: true,
                        allowEdit: true
                    })

                    api.blenderMode.enable()
                    api.disableInteractionMode()

                    // show page
                    App.LayoutInstance.setTitle('Interactions and Performances')
                    App.LayoutInstance.setFluid(true)
                    App.LayoutInstance.getRegion('content').show(this.layoutView)
                } else
                    this.layoutView.getRegion('performances').currentView.switchDir(dir || '')
            },
            attention_regions: function() {
                let attentionRegionsView = new AttentionRegionsView()
                api.disableInteractionMode()

                // show page
                App.LayoutInstance.setTitle('Attention Regions')
                App.LayoutInstance.setFluid(false)
                App.LayoutInstance.getRegion('content').show(attentionRegionsView)
            }
        }
    })
