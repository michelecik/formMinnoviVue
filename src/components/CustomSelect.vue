<template>
    <div class="custom-select" @blur="open = false">
        <div class="selected" :class="{ open: open }" @click="open = !open">
            {{ selected }}
        </div>
        <div class="items" :class="{ selectHide: !open }">
            <div
                v-for="(option, i) of options"
                :key="i"
                @click="
                    selected = option;
                    open = false;
                    $emit('input', option);
                "
            >
                {{ option }}
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    name: "CustomSelect",
    props: {
        options: {
            type: Array,
            required: true,
        },
        default: {
            type: String,
            required: false,
            default: null,
        },
        tabIndex: {
            type: Number,
            required: false,
            default: 0,
        },
    },
    setup(props, { emit }) {
        const selected = ref(
            props.default
                ? props.default
                : props.options.length > 0
                ? props.options[0]
                : null
        );

        const open = ref(false);

        emit("input", selected.value);

        return {
            props,
            selected,
            open,
        };
    },
};
</script>

<style scoped>
.custom-select {
    position: relative;
    width: 250px;
    text-align: left;
    outline: none;
    height: 25px;
    line-height: 25px;
}

.custom-select .selected {
    height: 25px;
    background-color: #fff;
    border-radius: 6px;
    border: 1px solid #1A1560;
    color: #8B88AF;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
}

.custom-select .selected.open {
    border: 1px solid #1A1560;
    border-bottom-color: transparent;
    border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
    position: absolute;
    content: "";
    top: 11px;
    right: 1em;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-color: #1A1560 transparent transparent transparent;
    transition: all .3s ease-in-out;
}

.custom-select .selected.open:after {
    transform: rotate(180deg);
    top: 5px;
}

.custom-select .items {
    color: #1A1560;
    border-radius: 0px 0px 6px 6px;
    overflow: hidden;
    border-right: 1px solid #1A1560;
    border-left: 1px solid #1A1560;
    border-bottom: 1px solid #1A1560;
    position: absolute;
    background-color: #fff;
    left: 0;
    right: 0;
    z-index: 1;
}

.custom-select .items div {
    color: #1A1560;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
}

.custom-select .items div:hover {
    background-color: #1A1560;
    color: #fff;
}

.selectHide {
    display: none;
}
</style>