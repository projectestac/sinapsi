<template>

    <div class="collapse row" id="share" style="padding:2em">
        <div class="form-group">
            <div class="col-md-3">
                <label for="share-link">Enllaç</label>
            </div>
            <div class="col-md-9">
                <input type="text" class="form-control" id="share-link" :value="shareUrl">
            </div>
        </div>
        <br>
            <br>
                <div class="form-group">
                    <div class="col-md-3">
                        <label for="embed">Inserir al web</label>
                    </div>
                    <div class="col-md-9">
                        <form class="form-inline">
                            <div class="form-group">
                                <label for="h">Alçada (en px)</label>
                                <input type="text" style="width:70px" class="form-control" id="h" v-model="embedHeight">
                            </div>

                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" v-model="embedSearch"> Inclou cercador
                                </label>
                            </div>
                        </form>
                        <br>
                            <textarea id="share-embed" class="form-control" rows="5">{{ shareEmbed }}</textarea>
                    </div>
                </div>
    </div>

</template>

<script>
export default {

    props: ['postview'],
    data: function () {
        return {
            pv: this.postview,
            shareUrl: '',
            shareEmbed: '',
            embedHeight: '500',
            embedSearch: false,
            filters:''
        }
    },
    created: function () {

        this.get_embed();

        bus.$on('filters_applied', function (filters) {
            this.filters=filters;
            this.get_embed();
        }.bind(this));

        bus.$on('postview_changed', function (postview) {
            this.pv=postview;
            this.get_embed();
        }.bind(this));
    
    },
    methods: {

        get_embed: function () {

            var height = 0;

            var url = shared.baseUrl + location.pathname;
            this.shareUrl = url + this.filters;
            this.shareEmbed = "<iframe src='" + url + "/embed";
            this.shareEmbed += "?h=" + this.embedHeight;
            this.shareEmbed += "&pv=" + this.pv;

            if (this.filters){
                this.shareEmbed += "&" + this.filters.slice(1);
            }

            if (this.embedSearch) {
                this.shareEmbed += '&search=1';
                height = (+this.embedHeight + 700);
            } else {
                height = (+this.embedHeight + 500);
            }

            this.shareEmbed += "' width='100%' height='" + height + "px'></iframe>";

        }
    },
    watch: {
        embedHeight: function () {
            this.get_embed()
        },
        embedSearch: function () {
            this.get_embed()
        }
    }
}
</script>